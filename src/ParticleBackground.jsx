import React, { useEffect } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  useEffect(() => {
    let camera, scene, renderer, particles, material, geometry;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;
    let lastTime = 0;

    const container = document.getElementById("particle-canvas");

    // Check if device is low-end (simplified check based on mobile or low memory)
    const isLowEndDevice = () => {
      return window.navigator.userAgent.match(/Mobile|Android/) || 
             (navigator.deviceMemory && navigator.deviceMemory < 4);
    };

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        5,
        1000000
      );
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x5d3fd3, 0.001);

      geometry = new THREE.BufferGeometry();
      const vertices = [];
      const size = 2000;

      // Adjust particle count based on device capability
      const particleCount = isLowEndDevice() ? 1000 : 3000;

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() * size - size / 2);
        const y = (Math.random() * size - size / 2);
        const z = (Math.random() * size - size / 2);
        vertices.push(x, y, z);
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

      material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "-1";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";

      if (container) {
        container.appendChild(renderer.domElement);
      }

      window.addEventListener("resize", onWindowResize);
      document.body.addEventListener("pointermove", onPointerMove);
    }

    function onPointerMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      animationId = requestAnimationFrame(animate);
      
      // Check if device is on battery (if supported)
      const isBatteryPowered = navigator.getBattery ? 
        (navigator.getBattery().then(battery => battery.charging === false)) : false;
      
      // Adjust frame rate based on battery status
      const frameDelay = isBatteryPowered ? 32 : 16; // 30fps vs 60fps
      
      if (time - lastTime > frameDelay) {
        render();
        lastTime = time;
      }
    }

    function render() {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Apply slower/reduced motion if user prefers it
      if (prefersReducedMotion) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.01;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.01;
        camera.lookAt(scene.position);
        scene.rotation.x += 0.0002;
        scene.rotation.y += 0.0004;
      } else {
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        scene.rotation.x += 0.001;
        scene.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);
      document.body.removeEventListener("pointermove", onPointerMove);

      if (particles) scene.remove(particles);
      geometry?.dispose();
      material?.dispose();

      renderer?.dispose();
      renderer?.forceContextLoss?.();

      if (renderer?.domElement?.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="particle-canvas" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ParticleBackground;
