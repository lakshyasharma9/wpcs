"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

function Model({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/agile_embassy_garden/scene.gltf",
      (gltf) => {
        setModel(gltf.scene);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setLoading(false);
      }
    );
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  if (loading || !model) return null;

  return (
    <group ref={groupRef} scale={isMobile ? 0.020 : 0.023} position={[0, isMobile ? -1.8 : -2.5, 0]}>
      <primitive object={model} />
    </group>
  );
}

export default function RealBuildingModel() {
  const [showGlow, setShowGlow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.querySelector('section');
      if (!heroSection) return;
      
      const bounds = heroSection.getBoundingClientRect();
      const relativeX = (e.clientX - bounds.left) / bounds.width;
      
      if (relativeX > 0.5 && e.clientY > bounds.top && e.clientY < bounds.bottom) {
        setShowGlow(true);
      } else {
        setShowGlow(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(20,99,33,0.9) 0%, rgba(20,99,33,0.8) 20%, rgba(20,99,33,0.5) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          opacity: showGlow ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      <Canvas
        camera={{ position: isMobile ? [3.5, 1.5, 3.5] : [4, 1.5, 4], fov: isMobile ? 65 : 65 }}
        style={{ background: "transparent", position: 'relative', zIndex: 2 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.6} />
        <pointLight position={[0, 8, 0]} intensity={0.8} color="#D4AF37" />
        
        <Suspense fallback={null}>
          <Model isMobile={isMobile} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
