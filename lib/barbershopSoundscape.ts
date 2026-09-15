export type BarbershopSoundscape = {
  start: () => Promise<void>;
  stop: () => void;
  dispose: () => void;
};

type BrowserWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

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

export function createBarbershopSoundscape(): BarbershopSoundscape {
  if (typeof window === "undefined") return noopSoundscape();

  const AudioContextCtor = window.AudioContext ?? (window as BrowserWindow).webkitAudioContext;
  if (!AudioContextCtor) return noopSoundscape();

  let context: AudioContext | null = null;
  let master: GainNode | null = null;
  let roomSource: AudioBufferSourceNode | null = null;
  let roomGain: GainNode | null = null;
  let hum: OscillatorNode | null = null;
  let humGain: GainNode | null = null;
  let active = false;
  let scissorTimer: number | null = null;
  let clipperTimer: number | null = null;
  let suspendTimer: number | null = null;

  const clearTimers = () => {
    if (scissorTimer !== null) window.clearTimeout(scissorTimer);
    if (clipperTimer !== null) window.clearTimeout(clipperTimer);
    if (suspendTimer !== null) window.clearTimeout(suspendTimer);
    scissorTimer = null;
    clipperTimer = null;
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
    roomGain.gain.value = 0.055;

    roomSource.connect(roomHighPass);
    roomHighPass.connect(roomLowPass);
    roomLowPass.connect(roomGain);
    roomGain.connect(master);
    roomSource.start();

    hum = context.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 72;
    humGain = context.createGain();
    humGain.gain.value = 0.008;
    hum.connect(humGain);
    humGain.connect(master);
    hum.start();
  };

  const playScissorClick = (when: number) => {
    if (!context || !master) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(3300, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.018, when + 0.003);
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
    gain.gain.exponentialRampToValueAtTime(0.012, now + 0.08);
    gain.gain.setValueAtTime(0.012, now + 0.42);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 0.62);
  };

  const scheduleScissorClicks = () => {
    if (!active || !context) return;
    scissorTimer = window.setTimeout(() => {
      if (!active || !context) return;
      const now = context.currentTime;
      playScissorClick(now);
      playScissorClick(now + 0.065);
      scheduleScissorClicks();
    }, 6200 + Math.random() * 7200);
  };

  const scheduleClipperPulses = () => {
    if (!active) return;
    clipperTimer = window.setTimeout(() => {
      playClipperPulse();
      scheduleClipperPulses();
    }, 10500 + Math.random() * 10000);
  };

  return {
    async start() {
      ensureGraph();
      if (!context || !master) return;
      clearTimers();
      active = true;
      await context.resume();
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(0.92, context.currentTime, 0.18);
      scheduleScissorClicks();
      scheduleClipperPulses();
    },
    stop() {
      if (!context || !master) return;
      active = false;
      clearTimers();
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
    },
  };
}
