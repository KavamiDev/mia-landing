"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

/* Rotating wireframe ring */
function Ring({
  radius,
  speed,
  color,
  opacity,
  tiltX,
  tiltZ,
}: {
  radius: number;
  speed: number;
  color: string;
  opacity: number;
  tiltX: number;
  tiltZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x =
        tiltX + THREE.MathUtils.lerp(0, pointer.y * 0.1, 0.02);
      ref.current.rotation.z =
        tiltZ + THREE.MathUtils.lerp(0, pointer.x * 0.1, 0.02);
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* Small floating golden orbs */
function FloatingOrbs() {
  const count = 18;
  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      ] as [number, number, number],
      scale: Math.random() * 0.06 + 0.02,
      speed: Math.random() * 0.5 + 0.3,
      offset: Math.random() * Math.PI * 2,
      key: i,
    }));
  }, []);

  return (
    <>
      {orbs.map((orb) => (
        <Float
          key={orb.key}
          speed={orb.speed}
          floatIntensity={0.8}
          rotationIntensity={0}
        >
          <mesh position={orb.position} scale={orb.scale}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshBasicMaterial color="#D4A853" transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/* Dust particles */
function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D4A853"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingSphere() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Concentric rotating rings */}
          <Ring radius={2.5} speed={0.15} color="#D4A853" opacity={0.25} tiltX={0.5} tiltZ={0.2} />
          <Ring radius={2.0} speed={-0.2} color="#C4922E" opacity={0.18} tiltX={-0.3} tiltZ={0.6} />
          <Ring radius={1.4} speed={0.25} color="#E8BD45" opacity={0.12} tiltX={0.8} tiltZ={-0.4} />

          {/* Floating orbs */}
          <FloatingOrbs />

          {/* Dust particles */}
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
