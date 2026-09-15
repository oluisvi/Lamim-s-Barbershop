"use client";

// APPROX_SPATIAL_LAYOUT — art-directed from real Lamim's photos.
// Photos define material/light/atmosphere only; they do not authorize exact dimensions.

import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useExperienceStore, type QualityTier } from "@/hooks/useExperienceStore";
import { SPATIAL_COLORS, SPATIAL_MATERIALS } from "@/lib/design-tokens";

type Vec3 = [number, number, number];

function BarberChair({ position, rotationY = 0 }: { position: Vec3; rotationY?: number }) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 0.14, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.76, 0.09, 30]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chromeHighlight} {...SPATIAL_MATERIALS.chrome} />
      </mesh>
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.17, 0.58, 20]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chrome} {...SPATIAL_MATERIALS.chrome} />
      </mesh>

      <RoundedBox args={[1.22, 0.28, 1.02]} radius={0.12} smoothness={4} position={[0, 0.91, 0]} castShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.chairUpholstery} {...SPATIAL_MATERIALS.upholstery} />
      </RoundedBox>
      <RoundedBox args={[1.16, 1.34, 0.26]} radius={0.14} smoothness={4} position={[0, 1.7, 0.37]} rotation={[-0.11, 0, 0]} castShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.chairSecondary} {...SPATIAL_MATERIALS.upholstery} />
      </RoundedBox>

      <mesh position={[0, 2.45, 0.39]} castShadow>
        <boxGeometry args={[0.08, 0.4, 0.08]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chrome} {...SPATIAL_MATERIALS.chrome} />
      </mesh>
      <RoundedBox args={[0.58, 0.38, 0.2]} radius={0.1} smoothness={3} position={[0, 2.66, 0.39]} castShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.chairUpholstery} {...SPATIAL_MATERIALS.upholstery} />
      </RoundedBox>

      {[-0.72, 0.72].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.16, -0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 1.05, 12]} />
            <meshStandardMaterial color={SPATIAL_COLORS.chromeHighlight} {...SPATIAL_MATERIALS.chrome} />
          </mesh>
          <RoundedBox args={[0.16, 0.13, 0.83]} radius={0.05} position={[x, 1.25, -0.02]} castShadow>
            <meshStandardMaterial color={SPATIAL_COLORS.chairUpholstery} roughness={0.5} metalness={0.02} />
          </RoundedBox>
        </group>
      ))}

      <mesh position={[0, 0.36, -0.73]} castShadow>
        <boxGeometry args={[0.92, 0.07, 0.52]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chromeHighlight} {...SPATIAL_MATERIALS.chrome} />
      </mesh>
    </group>
  );
}

function ProductBottle({ position, tone = SPATIAL_COLORS.softBlack, height = 0.3 }: { position: Vec3; tone?: string; height?: number }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.065, 0.075, height, 12]} />
        <meshStandardMaterial color={tone} roughness={0.44} metalness={0.06} />
      </mesh>
      <mesh position={[0, height / 2 + 0.04, 0]} castShadow>
        <cylinderGeometry args={[0.032, 0.038, 0.08, 10]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chrome} metalness={0.72} roughness={0.22} />
      </mesh>
    </group>
  );
}

function FoldedTowels({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      {[0, 0.075].map((y, index) => (
        <RoundedBox key={y} args={[0.42, 0.065, 0.28]} radius={0.025} position={[0, y, 0]} castShadow>
          <meshStandardMaterial
            color={index === 0 ? SPATIAL_COLORS.wallSecondary : SPATIAL_COLORS.chromeHighlight}
            roughness={0.72}
            metalness={0.01}
          />
        </RoundedBox>
      ))}
    </group>
  );
}

function WallMirror({ side, z }: { side: -1 | 1; z: number }) {
  const x = side * 6.84;
  const rotationY = side < 0 ? Math.PI / 2 : -Math.PI / 2;

  return (
    <group position={[x, 2.62, z]} rotation={[0, rotationY, 0]}>
      <mesh receiveShadow>
        <planeGeometry args={[2.12, 3.02]} />
        <meshPhysicalMaterial
          color={SPATIAL_COLORS.chromeHighlight}
          metalness={0.86}
          roughness={0.08}
          clearcoat={0.9}
          clearcoatRoughness={0.08}
        />
      </mesh>
      {[
        [-0.98, 1.42],
        [0.98, 1.42],
        [-0.98, -1.42],
        [0.98, -1.42],
      ].map(([px, py]) => (
        <mesh key={`${px}-${py}`} position={[px, py, 0.025]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color={SPATIAL_COLORS.steel} metalness={0.82} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function WallStation({ side, z }: { side: -1 | 1; z: number }) {
  const x = side * 6.47;
  const rotationY = side < 0 ? Math.PI / 2 : -Math.PI / 2;
  return (
    <>
      <WallMirror side={side} z={z} />
      <group position={[x, 0, z]} rotation={[0, rotationY, 0]}>
        <mesh position={[0, 0.98, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.65, 0.08, 0.38]} />
          <meshStandardMaterial color={SPATIAL_COLORS.softBlack} roughness={0.42} metalness={0.18} />
        </mesh>
        <ProductBottle position={[-0.48, 1.17, 0]} tone={SPATIAL_COLORS.softBlack} height={0.28} />
        <ProductBottle position={[-0.18, 1.15, 0]} tone={SPATIAL_COLORS.botanicalDark} height={0.25} />
        <ProductBottle position={[0.48, 1.18, 0]} tone={SPATIAL_COLORS.steel} height={0.3} />
        <FoldedTowels position={[0.68, 1.08, 0]} />
      </group>
    </>
  );
}

function ToolTrolley({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      {[1.02, 0.72, 0.44].map((y) => (
        <RoundedBox key={y} args={[0.72, 0.09, 0.5]} radius={0.035} position={[0, y, 0]} castShadow>
          <meshStandardMaterial color={SPATIAL_COLORS.trolley} {...SPATIAL_MATERIALS.blackMetal} />
        </RoundedBox>
      ))}
      {[-0.29, 0.29].flatMap((x) => [-0.2, 0.2].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, 0.22, z]}>
          <cylinderGeometry args={[0.055, 0.055, 0.08, 10]} />
          <meshStandardMaterial color={SPATIAL_COLORS.graphite} metalness={0.62} roughness={0.3} />
        </mesh>
      )))}
      <ProductBottle position={[0.16, 1.2, 0.01]} tone={SPATIAL_COLORS.softBlack} height={0.24} />
    </group>
  );
}

function EntryGlass() {
  return (
    <group position={[0, 0, 10.62]}>
      {[-5.15, 5.15].map((x) => (
        <mesh key={x} position={[x, 2.35, 0]} receiveShadow>
          <boxGeometry args={[3.65, 4.7, 0.16]} />
          <meshStandardMaterial color={SPATIAL_COLORS.wall} roughness={0.9} />
        </mesh>
      ))}
      {[-2.92, 0, 2.92].map((x) => (
        <mesh key={x} position={[x, 2.3, -0.03]}>
          <boxGeometry args={[0.07, 4.45, 0.08]} />
          <meshStandardMaterial color={SPATIAL_COLORS.graphite} metalness={0.65} roughness={0.25} />
        </mesh>
      ))}
      {[-1.46, 1.46].map((x) => (
        <mesh key={x} position={[x, 2.32, 0]}>
          <planeGeometry args={[2.82, 4.36]} />
          <meshPhysicalMaterial color={SPATIAL_COLORS.glass} transparent opacity={0.14} roughness={0.08} metalness={0.04} />
        </mesh>
      ))}
      <mesh position={[0, 4.58, 0]}>
        <boxGeometry args={[6, 0.1, 0.1]} />
        <meshStandardMaterial color={SPATIAL_COLORS.graphite} metalness={0.62} roughness={0.28} />
      </mesh>
    </group>
  );
}

function EntryConsole() {
  return (
    <group position={[-6.08, 0, 7.25]} rotation={[0, Math.PI / 2, 0]}>
      <RoundedBox args={[2.65, 0.72, 0.52]} radius={0.06} position={[0, 0.48, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.trolley} roughness={0.4} metalness={0.18} />
      </RoundedBox>
      <mesh position={[0, 0.89, 0]} castShadow>
        <boxGeometry args={[2.8, 0.07, 0.58]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chrome} metalness={0.55} roughness={0.3} />
      </mesh>
      <ProductBottle position={[-0.85, 1.09, 0]} tone={SPATIAL_COLORS.botanicalDark} height={0.25} />
    </group>
  );
}

function WaitingArea() {
  return (
    <group position={[0, 0, -4.52]}>
      <RoundedBox args={[3.6, 0.42, 0.86]} radius={0.13} smoothness={4} position={[0, 0.62, 0.18]} castShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.chairUpholstery} {...SPATIAL_MATERIALS.upholstery} />
      </RoundedBox>
      <RoundedBox args={[3.6, 0.88, 0.24]} radius={0.1} smoothness={4} position={[0, 1.2, -0.14]} castShadow>
        <meshStandardMaterial color={SPATIAL_COLORS.chairSecondary} {...SPATIAL_MATERIALS.upholstery} />
      </RoundedBox>
      {[-1.35, 1.35].map((x) => (
        <mesh key={x} position={[x, 0.25, 0.14]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.38, 10]} />
          <meshStandardMaterial color={SPATIAL_COLORS.chrome} {...SPATIAL_MATERIALS.chrome} />
        </mesh>
      ))}
    </group>
  );
}

function WallArtGallery({ quality }: { quality: QualityTier }) {
  const frames = quality === "low" ? [-1.25, 1.25] : [-2.45, 0, 2.45];

  return (
    <group position={[0, 2.72, -4.84]}>
      {frames.map((x, index) => (
        <group key={x} position={[x, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1.48, 1.78, 0.055]} />
            <meshStandardMaterial color={SPATIAL_COLORS.graphite} roughness={0.48} metalness={0.16} />
          </mesh>
          <mesh position={[0, 0, 0.032]}>
            <planeGeometry args={[1.3, 1.6]} />
            <meshStandardMaterial color={SPATIAL_COLORS.wallSecondary} roughness={0.9} />
          </mesh>
          <mesh position={[index % 2 ? 0.22 : -0.2, 0.12, 0.05]}>
            <circleGeometry args={[0.25 + index * 0.025, 24]} />
            <meshStandardMaterial color={index === 1 ? SPATIAL_COLORS.botanical : SPATIAL_COLORS.woodTrim} roughness={0.7} />
          </mesh>
          <mesh position={[index % 2 ? -0.2 : 0.18, -0.34, 0.052]} rotation={[0, 0, index % 2 ? -0.22 : 0.22]}>
            <boxGeometry args={[0.54, 0.045, 0.02]} />
            <meshStandardMaterial color={SPATIAL_COLORS.steel} roughness={0.5} metalness={0.35} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function WaitingSideTable({ detailed }: { detailed: boolean }) {
  return (
    <group position={[-2.55, 0, -4.08]}>
      <mesh position={[0, 0.54, 0]} castShadow>
        <cylinderGeometry args={[0.48, 0.48, 0.07, 24]} />
        <meshStandardMaterial color={SPATIAL_COLORS.graphite} roughness={0.42} metalness={0.22} />
      </mesh>
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.09, 0.5, 12]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chrome} {...SPATIAL_MATERIALS.chrome} />
      </mesh>
      <mesh position={[0, 0.055, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.38, 0.07, 20]} />
        <meshStandardMaterial color={SPATIAL_COLORS.chromeHighlight} {...SPATIAL_MATERIALS.chrome} />
      </mesh>
      {detailed ? (
        <>
          {[0, 0.028, 0.056].map((y, index) => (
            <mesh key={y} position={[-0.1 + index * 0.025, 0.605 + y, 0.02]} rotation={[0, 0.18 - index * 0.06, 0]} castShadow>
              <boxGeometry args={[0.43, 0.018, 0.31]} />
              <meshStandardMaterial color={index === 1 ? SPATIAL_COLORS.woodTrim : SPATIAL_COLORS.wallSecondary} roughness={0.72} />
            </mesh>
          ))}
          <ProductBottle position={[0.23, 0.72, -0.04]} tone={SPATIAL_COLORS.botanicalDark} height={0.18} />
        </>
      ) : null}
    </group>
  );
}

function Cactus({ position, scale = 1 }: { position: Vec3; scale?: number }) {
  const stems = [
    { p: [0, 1.22, 0] as Vec3, h: 2.3, r: 0 },
    { p: [-0.28, 1.0, 0] as Vec3, h: 1.5, r: -0.18 },
    { p: [0.34, 1.12, 0.03] as Vec3, h: 1.7, r: 0.2 },
    { p: [0.62, 0.82, -0.03] as Vec3, h: 1.15, r: 0.22 },
  ];

  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.27, 0]} castShadow>
        <cylinderGeometry args={[0.38, 0.32, 0.52, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.woodTrim} roughness={0.78} />
      </mesh>
      {stems.map((stem, index) => (
        <mesh key={index} position={stem.p} rotation={[0, 0, stem.r]} castShadow>
          <capsuleGeometry args={[0.11, stem.h, 5, 8]} />
          <meshStandardMaterial color={index % 2 ? SPATIAL_COLORS.botanicalDark : SPATIAL_COLORS.botanical} roughness={0.86} />
        </mesh>
      ))}
    </group>
  );
}

function CeilingLightStrip({ position, size }: { position: Vec3; size: Vec3 }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={SPATIAL_COLORS.warmLightBright}
        emissive={SPATIAL_COLORS.warmLight}
        emissiveIntensity={2.15}
        toneMapped={false}
      />
    </mesh>
  );
}

function CeilingLights({ quality }: { quality: QualityTier }) {
  const accentLights = quality === "high"
    ? [[-3.8, 7], [0, 4], [3.8, 1], [-3.8, -2]]
    : quality === "balanced"
      ? [[-2.7, 5], [2.7, 0]]
      : [[0, 2]];

  return (
    <group>
      <CeilingLightStrip position={[-5.6, 4.38, 2.4]} size={[0.06, 0.035, 14.8]} />
      <CeilingLightStrip position={[5.6, 4.38, 2.4]} size={[0.06, 0.035, 14.8]} />
      <CeilingLightStrip position={[0, 4.38, 8.95]} size={[10.9, 0.035, 0.06]} />
      <CeilingLightStrip position={[0, 4.38, -3.95]} size={[10.9, 0.035, 0.06]} />
      <CeilingLightStrip position={[0, 4.37, 2.3]} size={[8.6, 0.03, 0.055]} />

      {accentLights.map(([x, z]) => (
        <pointLight
          key={`${x}-${z}`}
          position={[x, 4.0, z]}
          intensity={quality === "high" ? 2.7 : quality === "balanced" ? 2.15 : 1.55}
          distance={5.2}
          color={SPATIAL_COLORS.warmLightBright}
          decay={2}
        />
      ))}
    </group>
  );
}

function Baseboards() {
  return (
    <>
      <mesh position={[-6.86, 0.14, 2]} receiveShadow>
        <boxGeometry args={[0.12, 0.25, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.woodTrim} {...SPATIAL_MATERIALS.wood} />
      </mesh>
      <mesh position={[6.86, 0.14, 2]} receiveShadow>
        <boxGeometry args={[0.12, 0.25, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.woodTrim} {...SPATIAL_MATERIALS.wood} />
      </mesh>
      <mesh position={[0, 0.14, -4.86]} receiveShadow>
        <boxGeometry args={[13.8, 0.25, 0.12]} />
        <meshStandardMaterial color={SPATIAL_COLORS.woodTrim} {...SPATIAL_MATERIALS.wood} />
      </mesh>
    </>
  );
}

export function BarbershopEnvironment() {
  const quality = useExperienceStore((s) => s.quality);
  const lowQuality = quality === "low";
  const shadowMapSize = quality === "high" ? 1024 : 512;

  const leftStations = [5.35, 1.9, -1.55];
  const rightStations = [4.25, 0.55, -2.55];

  return (
    <group>
      <color attach="background" args={[SPATIAL_COLORS.canvas]} />
      {!lowQuality && <fog attach="fog" args={[SPATIAL_COLORS.wallSecondary, 24, 42]} />}

      <hemisphereLight intensity={1.72} color={SPATIAL_COLORS.warmLightBright} groundColor={SPATIAL_COLORS.floor} />
      <ambientLight intensity={0.86} />
      <directionalLight
        position={[4, 9, 8]}
        intensity={2.35}
        color={SPATIAL_COLORS.keyLight}
        castShadow={!lowQuality}
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
      />
      <directionalLight position={[-6, 5, 6]} intensity={0.82} color={SPATIAL_COLORS.coolFill} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.02, 2]}>
        <planeGeometry args={[14, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.floor} {...SPATIAL_MATERIALS.floor} />
      </mesh>
      {[...Array(11)].map((_, i) => (
        <mesh key={`floor-line-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, -4.65 + i * 1.55]}>
          <planeGeometry args={[13.4, 0.012]} />
          <meshBasicMaterial color={SPATIAL_COLORS.floorJoint} transparent opacity={0.2} />
        </mesh>
      ))}

      <mesh position={[-7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.wall} {...SPATIAL_MATERIALS.wall} />
      </mesh>
      <mesh position={[7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.wallSecondary} {...SPATIAL_MATERIALS.wall} />
      </mesh>
      <mesh position={[0, 2.4, -5]} receiveShadow>
        <boxGeometry args={[14, 4.8, 0.22]} />
        <meshStandardMaterial color={SPATIAL_COLORS.wall} {...SPATIAL_MATERIALS.wall} />
      </mesh>
      <mesh position={[0, 4.48, 2]} receiveShadow>
        <boxGeometry args={[14, 0.12, 18]} />
        <meshStandardMaterial color={SPATIAL_COLORS.ceiling} roughness={0.94} />
      </mesh>

      <Baseboards />
      <EntryGlass />
      <EntryConsole />
      <WaitingArea />
      <WaitingSideTable detailed={!lowQuality} />
      <WallArtGallery quality={quality} />
      <Cactus position={[4.95, 0, -3.65]} scale={0.95} />
      <CeilingLights quality={quality} />

      {leftStations.map((z, index) => (
        <group key={`left-${z}`}>
          <WallStation side={-1} z={z} />
          <BarberChair position={[-5.55, 0, z]} rotationY={-Math.PI / 2} />
          {(index < 2 || !lowQuality) && <ToolTrolley position={[-4.65, 0, z - 0.72]} />}
        </group>
      ))}

      {rightStations.map((z, index) => (
        <group key={`right-${z}`}>
          <WallStation side={1} z={z} />
          <BarberChair position={[5.55, 0, z]} rotationY={Math.PI / 2} />
          {(index === 0 || !lowQuality) && <ToolTrolley position={[4.65, 0, z + 0.72]} />}
        </group>
      ))}
    </group>
  );
}
