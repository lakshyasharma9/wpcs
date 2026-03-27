"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  geometry,
  color,
  speed,
}: {
  position: [number, number, number];
  geometry: "box" | "octahedron" | "tetrahedron" | "dodecahedron";
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.3;
      meshRef.current.rotation.y += delta * speed * 0.2;
    }
  });

  const geometryElement =
    geometry === "box" ? (
      <boxGeometry args={[0.6, 0.6, 0.6]} />
    ) : geometry === "octahedron" ? (
      <octahedronGeometry args={[0.4]} />
    ) : geometry === "tetrahedron" ? (
      <tetrahedronGeometry args={[0.4]} />
    ) : (
      <dodecahedronGeometry args={[0.35]} />
    );

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {geometryElement}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <FloatingShape position={[-3, 2, 0]} geometry="box" color="#146321" speed={1.2} />
        <FloatingShape position={[3, -1, -2]} geometry="octahedron" color="#D4AF37" speed={0.8} />
        <FloatingShape position={[-2, -2, 1]} geometry="tetrahedron" color="#146321" speed={1.5} />
        <FloatingShape position={[2.5, 1.5, -1]} geometry="dodecahedron" color="#0A3B12" speed={1.0} />
        <FloatingShape position={[0, 3, -3]} geometry="box" color="#D4AF37" speed={0.6} />
        <FloatingShape position={[-4, 0, -2]} geometry="octahedron" color="#146321" speed={0.9} />
      </Canvas>
    </div>
  );
}
