"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/computer-optimized.glb";

function Computer() {
  const { scene } = useGLTF(MODEL_PATH);
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <primitive
        object={scene}
        scale={0.018}
        position={[0, -1.2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      />
    </Float>
  );
}

useGLTF.preload(MODEL_PATH);

export default function ContactScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.5, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows={false}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
        });
      }}
    >
      <color attach="background" args={["#f6f0d7"]} />
      <ambientLight intensity={1.2} />
      <hemisphereLight args={["#f6f0d7", "#89986d", 0.8]} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-4, 3, -3]} intensity={0.8} />
      <pointLight position={[0, 2, 3]} intensity={0.6} color="#c5d89d" />

      <Suspense fallback={null}>
        <Computer />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}
