"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import fontJson from "three/examples/fonts/helvetiker_regular.typeface.json"; // Built-in font

export default function ThreeDName() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Prevents mismatched HTML on first render

    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    // Load font & create text
    const font = new FontLoader().parse(fontJson);
    const textGeometry = new TextGeometry("Kibreab Aklilu", {
      font: font,
      size: 0.8,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelSegments: 5,
    });

    const textMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b4a,
      transparent: true,
      opacity: 1,
    });

    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textGeometry.computeBoundingBox();

    // Center text
    if (textGeometry.boundingBox) {
      const centerOffset =
        -0.5 *
        (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
      textMesh.position.set(centerOffset, 0, 0);
    }

    scene.add(textMesh);

    // Animation variables
    let fadeDirection = 1;
    let opacity = 0.6;
    let rotationX = 0;
    let rotationY = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      opacity += 0.0015 * fadeDirection;
      if (opacity >= 1 || opacity <= 0.6) fadeDirection *= -1;
      textMaterial.opacity = Math.min(1, Math.max(0.6, opacity));

      rotationX += 0.001;
      rotationY += 0.001;
      textMesh.rotation.x = Math.sin(rotationX) * 0.1;
      textMesh.rotation.y = Math.sin(rotationY) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return (
    <div className="w-48 h-16 flex items-center justify-center" ref={mountRef} />
  );
}

