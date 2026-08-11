'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinematicFilmCanvasProps {
  currentChapter: number;
}

export const CinematicFilmCanvas: React.FC<CinematicFilmCanvasProps> = ({ currentChapter }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef(currentChapter);

  useEffect(() => {
    chapterRef.current = currentChapter;
  }, [currentChapter]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFF7ED); // Warm White / Light Orange Tint
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central ARKAA Sun Core Object (Sun Radiation)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xF97316, // Vivid Orange
      wireframe: true,
      emissive: 0xFF6A00,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Core Glow (Sun Center)
    const innerGeo = new THREE.SphereGeometry(0.85, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xFF8C00, transparent: true, opacity: 0.85 });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Shockwave Pulse Ring (Sun Rays)
    const pulseGeo = new THREE.TorusGeometry(2.2, 0.03, 16, 100);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xF97316, transparent: true, opacity: 0.7 });
    const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
    pulseRing.rotation.x = Math.PI / 3;
    mainGroup.add(pulseRing);

    // 3. Digital City Buildings Group (Light Orange / White Wireframes)
    const cityGroup = new THREE.Group();
    const buildingCount = 40;
    const buildingGeo = new THREE.BoxGeometry(0.35, 1, 0.35);

    for (let i = 0; i < buildingCount; i++) {
      const h = 0.5 + Math.random() * 2.5;
      const bMat = new THREE.MeshStandardMaterial({
        color: Math.random() > 0.5 ? 0xF97316 : 0xFB923C,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const building = new THREE.Mesh(buildingGeo, bMat);
      building.scale.set(1 + Math.random() * 1.5, h, 1 + Math.random() * 1.5);
      building.position.set(
        (Math.random() - 0.5) * 12,
        -2.5 + h / 2,
        (Math.random() - 0.5) * 12
      );
      cityGroup.add(building);
    }
    cityGroup.position.y = -10;
    scene.add(cityGroup);

    // 4. Floating Particles (Sun Dust)
    const particleCount = 500;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

      colors[i * 3] = 0.97; // Orange particle tones
      colors[i * 3 + 1] = 0.45;
      colors[i * 3 + 2] = 0.08;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLightOrange = new THREE.PointLight(0xF97316, 4, 20);
    pointLightOrange.position.set(3, 3, 3);
    scene.add(pointLightOrange);

    const pointLightWhite = new THREE.PointLight(0xFFFFFF, 3, 20);
    pointLightWhite.position.set(-3, -3, 3);
    scene.add(pointLightWhite);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0012;
      mouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      const ch = chapterRef.current;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (ch <= 2) {
        // Chaos
        pointLightOrange.intensity = 6;
        mainGroup.rotation.x = time * 0.5 + targetY;
        mainGroup.rotation.y = time * 0.7 + targetX;
        coreMesh.scale.set(0.7, 0.7, 0.7);
        coreMat.color.setHex(0xEF4444); // Red/Orange warning
        cityGroup.position.y = -10;
      } else if (ch === 3) {
        // Discovery
        pointLightOrange.intensity = 8;
        mainGroup.rotation.x = targetY;
        mainGroup.rotation.y = time * 0.15 + targetX;
        coreMesh.scale.set(1.4, 1.4, 1.4);
        coreMat.color.setHex(0xF97316); // Sun Orange
        pulseRing.scale.set(1 + (time % 1) * 0.5, 1 + (time % 1) * 0.5, 1);
        cityGroup.position.y = -10;
      } else if (ch >= 4 && ch <= 6) {
        // Transformation
        pointLightOrange.intensity = 5;
        mainGroup.rotation.x = time * 0.2 + targetY;
        mainGroup.rotation.y = time * 0.3 + targetX;
        coreMesh.scale.set(1.1, 1.1, 1.1);
        coreMat.color.setHex(0xEA580C);
        cityGroup.position.y = -5;
      } else {
        // Final Digital City
        pointLightOrange.intensity = 7;
        cityGroup.position.y = 0;
        cityGroup.rotation.y = time * 0.08 + targetX;
        mainGroup.position.y = 2.2;
        mainGroup.rotation.y = time * 0.2;
        camera.position.z = 8;
      }

      pulseRing.rotation.z = time * 0.5;
      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      buildingGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 h-full w-full pointer-events-none opacity-40 z-0"
    />
  );
};
