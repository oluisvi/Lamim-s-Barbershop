"use client";

// APPROX_SPATIAL_LAYOUT — environment prototype. Replace with TODO_REAL_MODEL after client capture.

import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useExperienceStore } from "@/hooks/useExperienceStore";

type Vec3 = [number, number, number];

function BarberChair({ position }: { position: Vec3 }) {
  return (
    <group position={position} rotation={[0, Math.PI, 0]}>
      <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.68, 0.78, 0.16, 28]} />
        <meshStandardMaterial color="#3a342f" metalness={0.72} roughness={0.27} />
      </mesh>
      <mesh position={[0, 0.76, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.18, 0.55, 20]} />
        <meshStandardMaterial color="#9d9488" metalness={0.9} roughness={0.18} />
      </mesh>
      <RoundedBox args={[1.42, 0.3, 1.18]} radius={0.12} smoothness={4} position={[0, 1.1, -0.02]} castShadow>
        <meshStandardMaterial color="#8a4f2d" roughness={0.5} metalness={0.04} />
      </RoundedBox>
      <RoundedBox args={[1.38, 1.5, 0.29]} radius={0.14} smoothness={4} position={[0, 1.96, 0.39]} rotation={[-0.12, 0, 0]} castShadow>
        <meshStandardMaterial color="#7a452c" roughness={0.52} metalness={0.03} />
      </RoundedBox>
      <RoundedBox args={[0.35, 0.2, 1.12]} radius={0.08} position={[-0.87, 1.34, -0.02]} castShadow>
        <meshStandardMaterial color="#4a3429" roughness={0.43} />
      </RoundedBox>
      <RoundedBox args={[0.35, 0.2, 1.12]} radius={0.08} position={[0.87, 1.34, -0.02]} castShadow>
        <meshStandardMaterial color="#4a3429" roughness={0.43} />
      </RoundedBox>
      <mesh position={[0, 0.28, -0.72]} castShadow>
        <boxGeometry args={[0.86, 0.08, 0.5]} />
        <meshStandardMaterial color="#aaa093" metalness={0.92} roughness={0.15} />
      </mesh>
    </group>
  );
}

function ProductBottle({ position, tone = "#2e2925", height = 0.34 }: { position: Vec3; tone?: string; height?: number }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.07, 0.08, height, 12]} />
        <meshStandardMaterial color={tone} roughness={0.42} metalness={0.08} />
      </mesh>
      <mesh position={[0, height / 2 + 0.045, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.04, 0.09, 10]} />
        <meshStandardMaterial color="#b7a184" roughness={0.34} metalness={0.38} />
      </mesh>
    </group>
  );
}

function Station({ x }: { x: number }) {
  return (
    <group position={[x, 0, -4.78]}>
      <RoundedBox args={[2.55, 2.55, 0.14]} radius={0.12} smoothness={3} position={[0, 2.65, 0.06]}>
        <meshStandardMaterial color="#70523d" metalness={0.22} roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[2.28, 2.28, 0.08]} radius={0.1} smoothness={3} position={[0, 2.65, 0.14]}>
        <meshPhysicalMaterial color="#b9c1c2" metalness={0.72} roughness={0.1} clearcoat={0.74} />
      </RoundedBox>
      <mesh position={[0, 1.05, 0.45]} receiveShadow castShadow>
        <boxGeometry args={[2.65, 0.22, 0.72]} />
        <meshStandardMaterial color="#6f4e35" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.67, 0.18]} castShadow>
        <boxGeometry args={[2.25, 0.62, 0.52]} />
        <meshStandardMaterial color="#b8a68e" roughness={0.63} />
      </mesh>
      <ProductBottle position={[-0.78, 1.34, 0.39]} tone="#26342c" height={0.3} />
      <ProductBottle position={[-0.48, 1.33, 0.39]} tone="#6c3d2c" height={0.28} />
      <ProductBottle position={[0.7, 1.36, 0.39]} tone="#252422" height={0.34} />
      <mesh position={[0.28, 1.28, 0.4]} castShadow rotation={[0, 0, -0.18]}>
        <boxGeometry args={[0.08, 0.38, 0.05]} />
        <meshStandardMaterial color="#2c2824" metalness={0.55} roughness={0.27} />
      </mesh>
      <pointLight position={[0, 3.96, 0.65]} intensity={4.4} distance={4} color="#ffe3bd" decay={2} />
    </group>
  );
}

function ToolTrolley({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <RoundedBox args={[0.78, 0.12, 0.56]} radius={0.04} position={[0, 1.02, 0]} castShadow>
        <meshStandardMaterial color="#3d3935" metalness={0.62} roughness={0.3} />
      </RoundedBox>
      {[0.75, 0.48].map((y) => (
        <mesh key={y} position={[0, y, 0]} castShadow>
          <boxGeometry args={[0.68, 0.08, 0.5]} />
          <meshStandardMaterial color="#55504b" metalness={0.54} roughness={0.34} />
        </mesh>
      ))}
      {[-0.3, 0.3].flatMap((x) => [-0.2, 0.2].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, 0.25, z]}>
          <cylinderGeometry args={[0.065, 0.065, 0.08, 12]} />
          <meshStandardMaterial color="#2a2826" metalness={0.7} roughness={0.25} />
        </mesh>
      )))}
      <mesh position={[-0.18, 1.16, 0]} rotation={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[0.09, 0.33, 0.06]} />
        <meshStandardMaterial color="#191817" metalness={0.5} roughness={0.24} />
      </mesh>
      <ProductBottle position={[0.19, 1.18, 0.02]} tone="#4e2f23" height={0.25} />
    </group>
  );
}

function ProductShelf() {
  return (
    <group position={[-6.72, 2.55, -0.3]} rotation={[0, Math.PI / 2, 0]}>
      <RoundedBox args={[4.5, 2.55, 0.14]} radius={0.05} smoothness={2} position={[0, 0, 0]}>
        <meshStandardMaterial color="#a99175" roughness={0.67} />
      </RoundedBox>
      {[-0.88, 0, 0.88].map((y) => (
        <mesh key={y} position={[0, y, 0.18]} castShadow>
          <boxGeometry args={[3.95, 0.1, 0.46]} />
          <meshStandardMaterial color="#65462f" roughness={0.48} />
        </mesh>
      ))}
      {[-1.5, -0.9, -0.3, 0.3, 0.9, 1.5].map((x, i) => (
        <ProductBottle key={x} position={[x, -0.64, 0.44]} tone={i % 2 ? "#6f4937" : "#28362f"} height={0.28 + (i % 3) * 0.04} />
      ))}
      {[-1.25, -0.55, 0.2, 0.95].map((x, i) => (
        <ProductBottle key={x} position={[x, 0.24, 0.44]} tone={i % 2 ? "#22201e" : "#865137"} height={0.3} />
      ))}
    </group>
  );
}

function Plant({ position, scale = 1 }: { position: Vec3; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.32, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.22, 0.6, 16]} />
        <meshStandardMaterial color="#826147" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.66, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.05, 0.72, 8]} />
        <meshStandardMaterial color="#42533b" roughness={0.78} />
      </mesh>
      {[
        [-0.28, 0.78, 0.02, -0.55],
        [0.28, 0.82, -0.05, 0.55],
        [-0.18, 1.08, 0.02, -0.38],
        [0.2, 1.12, 0.08, 0.4],
        [0.02, 1.32, -0.03, 0.05],
      ].map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0.18, 0, r]} castShadow>
          <sphereGeometry args={[0.26, 10, 8]} />
          <meshStandardMaterial color={i % 2 ? "#51674a" : "#607657"} roughness={0.82} />
        </mesh>
      ))}
    </group>
  );
}

function SideTable() {
  return (
    <group position={[4.75, 0, 2.95]}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.09, 24]} />
        <meshStandardMaterial color="#795238" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.1, 0.52, 12]} />
        <meshStandardMaterial color="#6d6259" metalness={0.68} roughness={0.25} />
      </mesh>
      <mesh position={[0.18, 0.66, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.1, 0.18, 16]} />
        <meshStandardMaterial color="#d9cbb8" roughness={0.55} />
      </mesh>
      <mesh position={[-0.15, 0.64, 0.03]} castShadow>
        <boxGeometry args={[0.28, 0.08, 0.2]} />
        <meshStandardMaterial color="#4d3528" roughness={0.5} />
      </mesh>
    </group>
  );
}

function FramedPhoto({ position, rotation = [0, 0, 0], tone = "#6d5039" }: { position: Vec3; rotation?: Vec3; tone?: string }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[1.15, 1.42, 0.1]} radius={0.035} smoothness={2}>
        <meshStandardMaterial color="#5b4231" roughness={0.55} />
      </RoundedBox>
      <mesh position={[0, 0, 0.061]}>
        <planeGeometry args={[0.95, 1.2]} />
        <meshStandardMaterial color={tone} roughness={0.78} />
      </mesh>
    </group>
  );
}

function EntryGlass() {
  return (
    <group position={[0, 0, 10.62]}>
      {[-5.15, 5.15].map((x) => (
        <mesh key={x} position={[x, 2.35, 0]} receiveShadow>
          <boxGeometry args={[3.65, 4.7, 0.16]} />
          <meshStandardMaterial color="#b8a68e" roughness={0.72} />
        </mesh>
      ))}
      {[-2.92, 0, 2.92].map((x) => (
        <mesh key={x} position={[x, 2.3, -0.03]}>
          <boxGeometry args={[0.08, 4.45, 0.1]} />
          <meshStandardMaterial color="#4a433d" metalness={0.62} roughness={0.28} />
        </mesh>
      ))}
      {[-1.46, 1.46].map((x) => (
        <mesh key={x} position={[x, 2.32, 0]}>
          <planeGeometry args={[2.82, 4.36]} />
          <meshPhysicalMaterial color="#bfd1d0" transparent opacity={0.18} roughness={0.08} metalness={0.05} />
        </mesh>
      ))}
      <mesh position={[0, 4.58, 0]}>
        <boxGeometry args={[6, 0.12, 0.12]} />
        <meshStandardMaterial color="#4a433d" metalness={0.62} roughness={0.28} />
      </mesh>
    </group>
  );
}

function Reception() {
  return (
    <group position={[0, 0, 7.25]}>
      <RoundedBox args={[4.9, 1.34, 1.05]} radius={0.12} smoothness={4} position={[0, 0.75, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#8a6347" roughness={0.48} metalness={0.04} />
      </RoundedBox>
      <mesh position={[0, 1.46, -0.05]} castShadow>
        <boxGeometry args={[5.05, 0.13, 1.18]} />
        <meshStandardMaterial color="#d1c0a8" roughness={0.5} metalness={0.04} />
      </mesh>
      <mesh position={[0, 2.62, -0.62]}>
        <boxGeometry args={[3.7, 0.07, 0.07]} />
        <meshStandardMaterial color="#d7ad74" emissive="#c68843" emissiveIntensity={1.5} />
      </mesh>
      <ProductBottle position={[-1.75, 1.78, 0.1]} tone="#2c382f" height={0.28} />
      <mesh position={[1.62, 1.7, 0.04]} castShadow rotation={[0, 0.15, 0]}>
        <boxGeometry args={[0.54, 0.07, 0.38]} />
        <meshStandardMaterial color="#3c3530" metalness={0.18} roughness={0.42} />
      </mesh>
    </group>
  );
}

function WaitingArea() {
  return (
    <group position={[5.28, 0, 4.5]} rotation={[0, -Math.PI / 2, 0]}>
      <RoundedBox args={[3.15, 0.5, 1.08]} radius={0.16} smoothness={4} position={[0, 0.68, 0]} castShadow>
        <meshStandardMaterial color="#8b5738" roughness={0.56} />
      </RoundedBox>
      <RoundedBox args={[3.15, 1.22, 0.3]} radius={0.14} smoothness={4} position={[0, 1.42, 0.4]} castShadow>
        <meshStandardMaterial color="#7b4b34" roughness={0.56} />
      </RoundedBox>
      {[-0.84, 0.84].map((x) => (
        <RoundedBox key={x} args={[0.7, 0.19, 0.78]} radius={0.09} position={[x, 0.98, -0.03]} castShadow>
          <meshStandardMaterial color="#a16b48" roughness={0.62} />
        </RoundedBox>
      ))}
    </group>
  );
}

function CeilingLights({ lowQuality }: { lowQuality: boolean }) {
  return (
    <group position={[0, 4.38, 0]}>
      {[-4.8, -1.6, 1.6, 4.8, 8].map((z) => (
        <group key={z} position={[0, 0, z]}>
          <mesh>
            <boxGeometry args={[9.4, 0.05, 0.08]} />
            <meshStandardMaterial color="#51473f" />
          </mesh>
          {(lowQuality ? [0] : [-3.4, 0, 3.4]).map((x) => (
            <group key={x} position={[x, -0.05, 0]}>
              <mesh>
                <cylinderGeometry args={[0.15, 0.2, 0.2, 16]} />
                <meshStandardMaterial color="#3b342f" />
              </mesh>
              <pointLight position={[0, -0.3, 0]} intensity={7.2} distance={4.8} color="#ffe2bd" decay={2} />
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

function Rug() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4.95, 0.016, 4.42]} receiveShadow>
      <planeGeometry args={[3.9, 2.8]} />
      <meshStandardMaterial color="#6d5749" roughness={0.96} />
    </mesh>
  );
}

export function BarbershopEnvironment() {
  const quality = useExperienceStore((s) => s.quality);
  const lowQuality = quality === "low";

  return (
    <group>
      <color attach="background" args={["#201a15"]} />
      <fog attach="fog" args={["#4a3d32", 16, 33]} />
      <hemisphereLight intensity={1.25} color="#fff1dc" groundColor="#5a4635" />
      <ambientLight intensity={0.46} />
      <directionalLight position={[4, 9, 8]} intensity={2.25} color="#fff4e2" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <directionalLight position={[-5, 4, 9]} intensity={0.75} color="#d5e2df" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.02, 2]}>
        <planeGeometry args={[14, 18]} />
        <meshStandardMaterial color="#8f7963" roughness={0.8} metalness={0.02} />
      </mesh>
      {[...Array(10)].map((_, i) => (
        <mesh key={`floor-line-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.006, -4.8 + i * 1.65]}>
          <planeGeometry args={[13.4, 0.018]} />
          <meshBasicMaterial color="#5f4b3b" transparent opacity={0.38} />
        </mesh>
      ))}

      <mesh position={[-7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color="#c8b79f" roughness={0.84} />
      </mesh>
      <mesh position={[7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color="#b8a68e" roughness={0.84} />
      </mesh>
      <mesh position={[0, 2.4, -5]} receiveShadow>
        <boxGeometry args={[14, 4.8, 0.22]} />
        <meshStandardMaterial color="#c5b39a" roughness={0.84} />
      </mesh>
      <mesh position={[0, 4.48, 2]} receiveShadow>
        <boxGeometry args={[14, 0.12, 18]} />
        <meshStandardMaterial color="#302923" roughness={0.9} />
      </mesh>

      <mesh position={[0, 3.25, 10.5]}>
        <boxGeometry args={[4.5, 0.12, 0.08]} />
        <meshStandardMaterial color="#d8b27c" emissive="#b87432" emissiveIntensity={1.65} />
      </mesh>

      <EntryGlass />
      <Reception />
      <WaitingArea />
      <Rug />
      <SideTable />
      <Plant position={[5.9, 0, 1.8]} scale={0.95} />
      <Plant position={[-5.75, 0, 7.7]} scale={0.8} />
      <ProductShelf />
      <CeilingLights lowQuality={lowQuality} />

      <Station x={-3.8} />
      <Station x={0} />
      <Station x={3.8} />
      <BarberChair position={[-3.8, 0, -2.15]} />
      <BarberChair position={[0, 0, -2.15]} />
      <BarberChair position={[3.8, 0, -2.15]} />
      <ToolTrolley position={[-2.15, 0, -2.15]} />
      <ToolTrolley position={[1.65, 0, -2.05]} />
      {!lowQuality && <ToolTrolley position={[5.15, 0, -2.2]} />}

      <FramedPhoto position={[-6.82, 2.82, 4.9]} rotation={[0, Math.PI / 2, 0]} tone="#79604d" />
      <FramedPhoto position={[-6.82, 2.78, 3.35]} rotation={[0, Math.PI / 2, 0]} tone="#4f5b53" />
      {!lowQuality && <FramedPhoto position={[-6.82, 2.85, 1.78]} rotation={[0, Math.PI / 2, 0]} tone="#8a6750" />}
      {!lowQuality && <FramedPhoto position={[6.82, 2.75, 5.55]} rotation={[0, -Math.PI / 2, 0]} tone="#5c5046" />}

      <group position={[6.78, 2.25, 0.7]} rotation={[0, -Math.PI / 2, 0]}>
        {[-1.1, 0, 1.1].map((x, i) => (
          <mesh key={x} position={[x, 0, 0]}>
            <boxGeometry args={[0.92, 0.07, 0.08]} />
            <meshStandardMaterial color="#d8ad72" emissive="#9c602d" emissiveIntensity={0.8 + i * 0.12} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
