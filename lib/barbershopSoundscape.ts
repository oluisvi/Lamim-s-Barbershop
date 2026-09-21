export type BarbershopSoundscape = {
  start: () => Promise<void>;
  stop: () => void;
  dispose: () => void;
};

type BrowserWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

export const JAZZ_BPM = 74;
const BEAT_SECONDS = 60 / JAZZ_BPM;
const BAR_SECONDS = BEAT_SECONDS * 4;

const JAZZ_CHORDS = [
  [50, 53, 57, 60, 64], // Dm9
  [43, 47, 50, 53, 57], // G13
  [48, 52, 55, 59, 62], // Cmaj9
  [45, 49, 52, 55, 58], // A7b9
] as const;

const WALKING_BASS = [
  [38, 41, 45, 47],
  [31, 35, 38, 41],
  [36, 40, 43, 47],
  [33, 37, 40, 43],
] as const;

function midiToFrequency(note: number) {
  return 440 * 2 ** ((note - 69) / 12);
}

function noopSoundscape(): BarbershopSoundscape {
  return {
    start: async () => undefined,
    stop: () => undefined,
    dispose: () => undefined,
  };
}

function createNoiseBuffer(context: AudioContext, durationSeconds = 2) {
  const frameCount = Math.floor(context.sampleRate * durationSeconds);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const channel = buffer.getChannelData(0);
  let smooth = 0;

  for (let index = 0; index < frameCount; index += 1) {
    const white = Math.random() * 2 - 1;
    smooth = smooth * 0.985 + white * 0.015;
    channel[index] = white * 0.12 + smooth * 0.5;
  }

  return buffer;
}

function createBrushBuffer(context: AudioContext) {
  const frameCount = Math.floor(context.sampleRate * 0.16);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let index = 0; index < frameCount; index += 1) {
    const envelope = Math.exp(-index / (frameCount * 0.17));
    channel[index] = (Math.random() * 2 - 1) * envelope;
  }
  return buffer;
}

function buildBarbershopSoundscape(): BarbershopSoundscape {
  if (typeof window === "undefined") return noopSoundscape();

  const AudioContextCtor = window.AudioContext ?? (window as BrowserWindow).webkitAudioContext;
  if (!AudioContextCtor) return noopSoundscape();

  let context: AudioContext | null = null;
  let master: GainNode | null = null;
  let roomSource: AudioBufferSourceNode | null = null;
  let roomGain: GainNode | null = null;
  let hum: OscillatorNode | null = null;
  let humGain: GainNode | null = null;
  let brushBuffer: AudioBuffer | null = null;
  let active = false;
  let scissorTimer: number | null = null;
  let clipperTimer: number | null = null;
  let jazzTimer: number | null = null;
  let suspendTimer: number | null = null;
  let nextJazzBarTime = 0;
  let jazzBarIndex = 0;

  const clearTimers = () => {
    if (scissorTimer !== null) window.clearTimeout(scissorTimer);
    if (clipperTimer !== null) window.clearTimeout(clipperTimer);
    if (jazzTimer !== null) window.clearTimeout(jazzTimer);
    if (suspendTimer !== null) window.clearTimeout(suspendTimer);
    scissorTimer = null;
    clipperTimer = null;
    jazzTimer = null;
    suspendTimer = null;
  };

  const ensureGraph = () => {
    if (context && master) return;

    context = new AudioContextCtor();
    master = context.createGain();
    master.gain.value = 0.0001;
    master.connect(context.destination);

    roomSource = context.createBufferSource();
    roomSource.buffer = createNoiseBuffer(context);
    roomSource.loop = true;

    const roomHighPass = context.createBiquadFilter();
    roomHighPass.type = "highpass";
    roomHighPass.frequency.value = 70;

    const roomLowPass = context.createBiquadFilter();
    roomLowPass.type = "lowpass";
    roomLowPass.frequency.value = 1450;

    roomGain = context.createGain();
    roomGain.gain.value = 0.042;

    roomSource.connect(roomHighPass);
    roomHighPass.connect(roomLowPass);
    roomLowPass.connect(roomGain);
    roomGain.connect(master);
    roomSource.start();

    hum = context.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 72;
    humGain = context.createGain();
    humGain.gain.value = 0.006;
    hum.connect(humGain);
    humGain.connect(master);
    hum.start();

    brushBuffer = createBrushBuffer(context);
  };

  const playScissorClick = (when: number) => {
    if (!context || !master) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(3300, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.012, when + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.025);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(when);
    oscillator.stop(when + 0.03);
  };

  const playClipperPulse = () => {
    if (!context || !master || !active) return;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(108, now);
    filter.type = "lowpass";
    filter.frequency.value = 520;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.009, now + 0.08);
    gain.gain.setValueAtTime(0.009, now + 0.42);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 0.62);
  };

  const playRhodesChord = (notes: readonly number[], when: number) => {
    if (!context || !master) return;

    notes.forEach((note, index) => {
      const oscillator = context!.createOscillator();
      const filter = context!.createBiquadFilter();
      const gain = context!.createGain();
      oscillator.type = index % 2 === 0 ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(midiToFrequency(note), when);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1900, when);
      filter.Q.value = 0.65;
      gain.gain.setValueAtTime(0.0001, when);
      gain.gain.exponentialRampToValueAtTime(0.012 / notes.length, when + 0.025 + index * 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + BAR_SECONDS * 0.78);
      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master!);
      oscillator.start(when);
      oscillator.stop(when + BAR_SECONDS * 0.82);
    });
  };

  const playWalkingBass = (notes: readonly number[], when: number) => {
    if (!context || !master) return;

    notes.forEach((note, beatIndex) => {
      const start = when + beatIndex * BEAT_SECONDS;
      const oscillator = context!.createOscillator();
      const filter = context!.createBiquadFilter();
      const gain = context!.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(midiToFrequency(note), start);
      filter.type = "lowpass";
      filter.frequency.value = 430;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.018, start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + BEAT_SECONDS * 0.72);
      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master!);
      oscillator.start(start);
      oscillator.stop(start + BEAT_SECONDS * 0.76);
    });
  };

  const playBrushHit = (when: number, level = 0.012) => {
    if (!context || !master || !brushBuffer) return;
    const source = context.createBufferSource();
    const highPass = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = brushBuffer;
    highPass.type = "highpass";
    highPass.frequency.value = 1800;
    gain.gain.setValueAtTime(level, when);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.14);
    source.connect(highPass);
    highPass.connect(gain);
    gain.connect(master);
    source.start(when);
    source.stop(when + 0.16);
  };

  const scheduleJazzBar = () => {
    if (!active || !context) return;
    const now = context.currentTime;
    const start = Math.max(nextJazzBarTime || now + 0.06, now + 0.045);
    const progressionIndex = jazzBarIndex % JAZZ_CHORDS.length;

    playRhodesChord(JAZZ_CHORDS[progressionIndex], start);
    playWalkingBass(WALKING_BASS[progressionIndex], start);
    playBrushHit(start + BEAT_SECONDS, 0.009);
    playBrushHit(start + BEAT_SECONDS * 3, 0.011);
    playBrushHit(start + BEAT_SECONDS * 2.5, 0.0045);

    jazzBarIndex += 1;
    nextJazzBarTime = start + BAR_SECONDS;
    const delay = Math.max(180, (nextJazzBarTime - context.currentTime - 0.22) * 1000);
    jazzTimer = window.setTimeout(scheduleJazzBar, delay);
  };

  const scheduleScissorClicks = () => {
    if (!active || !context) return;
    scissorTimer = window.setTimeout(() => {
      if (!active || !context) return;
      const now = context.currentTime;
      playScissorClick(now);
      playScissorClick(now + 0.065);
      scheduleScissorClicks();
    }, 6800 + Math.random() * 8200);
  };

  const scheduleClipperPulses = () => {
    if (!active) return;
    clipperTimer = window.setTimeout(() => {
      playClipperPulse();
      scheduleClipperPulses();
    }, 12000 + Math.random() * 12000);
  };

  return {
    async start() {
      ensureGraph();
      if (!context || !master) return;
      if (suspendTimer !== null) {
        window.clearTimeout(suspendTimer);
        suspendTimer = null;
      }
      await context.resume();
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(0.84, context.currentTime, 0.16);
      if (active) return;
      active = true;
      nextJazzBarTime = 0;
      scheduleJazzBar();
      scheduleScissorClicks();
      scheduleClipperPulses();
    },
    stop() {
      if (!context || !master) return;
      active = false;
      clearTimers();
      nextJazzBarTime = 0;
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(0.0001, context.currentTime, 0.08);
      suspendTimer = window.setTimeout(() => {
        if (!active && context?.state === "running") void context.suspend();
      }, 260);
    },
    dispose() {
      active = false;
      clearTimers();
      try { roomSource?.stop(); } catch {}
      try { hum?.stop(); } catch {}
      roomSource?.disconnect();
      roomGain?.disconnect();
      hum?.disconnect();
      humGain?.disconnect();
      master?.disconnect();
      if (context && context.state !== "closed") void context.close();
      context = null;
      master = null;
      roomSource = null;
      roomGain = null;
      hum = null;
      humGain = null;
      brushBuffer = null;
    },
  };
}

let sharedSoundscape: BarbershopSoundscape | null = null;

function getSharedSoundscape() {
  if (!sharedSoundscape) sharedSoundscape = buildBarbershopSoundscape();
  return sharedSoundscape;
}

export function createBarbershopSoundscape(): BarbershopSoundscape {
  return getSharedSoundscape();
}

export async function startBarbershopSoundscape() {
  await getSharedSoundscape().start();
}

export function stopBarbershopSoundscape() {
  sharedSoundscape?.stop();
}

export function disposeBarbershopSoundscape() {
  sharedSoundscape?.dispose();
  sharedSoundscape = null;
}
