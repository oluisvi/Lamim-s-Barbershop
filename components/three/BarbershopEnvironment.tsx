"use client";

// APPROX_SPATIAL_LAYOUT — environment prototype. Replace with TODO_REAL_MODEL after client capture.

import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function BarberChair({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, Math.PI, 0]}>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.74, 0.18, 32]} />
        <meshStandardMaterial color="#171310" metalness={0.68} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0.82, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.18, 0.5, 24]} />
        <meshStandardMaterial color="#777066" metalness={0.86} roughness={0.22} />
      </mesh>
      <RoundedBox args={[1.35, 0.28, 1.15]} radius={0.12} smoothness={4} position={[0, 1.12, -0.05]} castShadow>
        <meshStandardMaterial color="#40291d" roughness={0.48} metalness={0.08} />
      </RoundedBox>
      <RoundedBox args={[1.32, 1.45, 0.26]} radius={0.13} smoothness={4} position={[0, 1.95, 0.38]} rotation={[-0.12, 0, 0]} castShadow>
        <meshStandardMaterial color="#4a3022" roughness={0.5} metalness={0.06} />
      </RoundedBox>
      <RoundedBox args={[0.34, 0.18, 1.1]} radius={0.08} position={[-0.85, 1.35, -0.02]} castShadow>
        <meshStandardMaterial color="#2a211b" roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[0.34, 0.18, 1.1]} radius={0.08} position={[0.85, 1.35, -0.02]} castShadow>
        <meshStandardMaterial color="#2a211b" roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0.34, -0.7]} castShadow>
        <boxGeometry args={[0.8, 0.08, 0.45]} />
        <meshStandardMaterial color="#6f685f" metalness={0.92} roughness={0.18} />
      </mesh>
    </group>
  );
}

function Station({ x }: { x: number }) {
  return (
    <group position={[x, 0, -4.78]}>
      <RoundedBox args={[2.55, 2.55, 0.14]} radius={0.12} smoothness={3} position={[0, 2.65, 0.06]}>
        <meshStandardMaterial color="#c99f62" emissive="#3a2a17" emissiveIntensity={0.35} metalness={0.45} roughness={0.26} />
      </RoundedBox>
      <RoundedBox args={[2.28, 2.28, 0.08]} radius={0.1} smoothness={3} position={[0, 2.65, 0.14]}>
        <meshPhysicalMaterial color="#6e7478" metalness={0.72} roughness={0.13} clearcoat={0.7} />
      </RoundedBox>
      <mesh position={[0, 1.05, 0.45]} receiveShadow castShadow>
        <boxGeometry args={[2.65, 0.22, 0.7]} />
        <meshStandardMaterial color="#2a211b" roughness={0.55} />
      </mesh>
      <mesh position={[-0.75, 1.24, 0.4]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.32, 16]} />
        <meshStandardMaterial color="#c39a62" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0.72, 1.26, 0.4]} castShadow>
        <boxGeometry args={[0.18, 0.4, 0.18]} />
        <meshStandardMaterial color="#171411" roughness={0.4} />
      </mesh>
    </group>
  );
}

function Reception() {
  return (
    <group position={[0, 0, 7.3]}>
      <RoundedBox args={[4.8, 1.35, 1.05]} radius={0.12} smoothness={4} position={[0, 0.75, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#1a1713" roughness={0.43} metalness={0.08} />
      </RoundedBox>
      <mesh position={[0, 1.46, -0.05]} castShadow>
        <boxGeometry args={[5, 0.12, 1.18]} />
        <meshStandardMaterial color="#8d6a42" roughness={0.42} metalness={0.12} />
      </mesh>
      <mesh position={[0, 2.55, -0.6]}>
        <boxGeometry args={[3.4, 0.06, 0.06]} />
        <meshStandardMaterial color="#d1a46a" emissive="#b47b39" emissiveIntensity={1.8} />
      </mesh>
    </group>
  );
}

function WaitingArea() {
  return (
    <group position={[5.3, 0, 4.4]} rotation={[0, -Math.PI / 2, 0]}>
      <RoundedBox args={[2.8, 0.45, 1]} radius={0.15} smoothness={4} position={[0, 0.65, 0]} castShadow>
        <meshStandardMaterial color="#3c2b22" roughness={0.56} />
      </RoundedBox>
      <RoundedBox args={[2.8, 1.15, 0.28]} radius={0.13} smoothness={4} position={[0, 1.35, 0.38]} castShadow>
        <meshStandardMaterial color="#463026" roughness={0.55} />
      </RoundedBox>
      <mesh position={[0, 1.36, -0.55]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.46, 32]} />
        <meshStandardMaterial color="#8d6a42" metalness={0.2} roughness={0.45} />
      </mesh>
    </group>
  );
}

function CeilingLights() {
  return (
    <group position={[0, 4.45, 0]}>
      {[-5.4, -2.7, 0, 2.7, 5.4].map((z) => (
        <group key={z} position={[0, 0, z]}>
          <mesh>
            <boxGeometry args={[8.5, 0.05, 0.08]} />
            <meshStandardMaterial color="#27231d" />
          </mesh>
          {[-3.4, 0, 3.4].map((x) => (
            <group key={x} position={[x, -0.05, 0]}>
              <mesh>
                <cylinderGeometry args={[0.16, 0.22, 0.22, 18]} />
                <meshStandardMaterial color="#17130f" />
              </mesh>
              <pointLight position={[0, -0.3, 0]} intensity={9} distance={4.2} color="#ffd7a3" decay={2} />
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

export function BarbershopEnvironment() {
  return (
    <group>
      <color attach="background" args={["#0d0c0a"]} />
      <fog attach="fog" args={["#0d0c0a", 12, 26]} />
      <hemisphereLight intensity={0.7} color="#ffe6c4" groundColor="#17120d" />
      <ambientLight intensity={0.22} />
      <directionalLight position={[3, 8, 4]} intensity={1.2} color="#fff0d6" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.02, 2]}>
        <planeGeometry args={[14, 18]} />
        <meshStandardMaterial color="#221c16" roughness={0.7} metalness={0.04} />
      </mesh>
      {[...Array(10)].map((_, i) => (
        <mesh key={`floor-line-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.006, -4.8 + i * 1.65]}>
          <planeGeometry args={[13.4, 0.015]} />
          <meshBasicMaterial color="#4b3927" transparent opacity={0.36} />
        </mesh>
      ))}

      <mesh position={[-7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color="#171512" roughness={0.8} />
      </mesh>
      <mesh position={[7, 2.4, 2]} receiveShadow>
        <boxGeometry args={[0.22, 4.8, 18]} />
        <meshStandardMaterial color="#171512" roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.4, -5]} receiveShadow>
        <boxGeometry args={[14, 4.8, 0.22]} />
        <meshStandardMaterial color="#181511" roughness={0.84} />
      </mesh>

      <mesh position={[-5.1, 2.4, 10.8]} receiveShadow>
        <boxGeometry args={[3.8, 4.8, 0.2]} />
        <meshStandardMaterial color="#11100e" roughness={0.8} />
      </mesh>
      <mesh position={[5.1, 2.4, 10.8]} receiveShadow>
        <boxGeometry args={[3.8, 4.8, 0.2]} />
        <meshStandardMaterial color="#11100e" roughness={0.8} />
      </mesh>
      <mesh position={[0, 4.48, 2]} receiveShadow>
        <boxGeometry args={[14, 0.12, 18]} />
        <meshStandardMaterial color="#11100e" roughness={0.9} />
      </mesh>

      <mesh position={[0, 3.2, 10.65]}>
        <boxGeometry args={[4.3, 0.12, 0.08]} />
        <meshStandardMaterial color="#c99f62" emissive="#8e5b2a" emissiveIntensity={2.6} />
      </mesh>

      <Station x={-3.8} />
      <Station x={0} />
      <Station x={3.8} />
      <BarberChair position={[-3.8, 0, -2.15]} />
      <BarberChair position={[0, 0, -2.15]} />
      <BarberChair position={[3.8, 0, -2.15]} />

      <Reception />
      <WaitingArea />
      <CeilingLights />

      <group position={[-6.77, 2.45, 3.9]} rotation={[0, Math.PI / 2, 0]}>
        {[[-1.2, 0.55], [0, 0.2], [1.1, 0.65], [-0.4, -0.85], [1.0, -0.75]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}>
            <boxGeometry args={[1.05, 1.25, 0.08]} />
            <meshStandardMaterial color={i % 2 ? "#5f4a35" : "#8a6b49"} roughness={0.7} />
          </mesh>
        ))}
      </group>

      <group position={[6.78, 2.0, 4.6]} rotation={[0, -Math.PI / 2, 0]}>
        {[0, 0.85, -0.85].map((y, i) => (
          <mesh key={i} position={[y * 1.1, i === 0 ? 0.6 : 0, 0]}>
            <boxGeometry args={[1.25, 0.08, 0.08]} />
            <meshStandardMaterial color="#c79d5f" emissive="#8d5b2c" emissiveIntensity={1.1} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
