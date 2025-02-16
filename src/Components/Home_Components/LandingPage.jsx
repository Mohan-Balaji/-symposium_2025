import React, { useEffect } from "react";
import * as THREE from "three";
import "./LandingPage.css"; // Include the CSS for styling
import heroimg from "../../assets/heroimg.png";
const LandingPage = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    document.body.appendChild(renderer.domElement);

    // Star Settings
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("https://threejs.org/examples/textures/sprites/circle.png");

    for (let i = 0; i < particleCount; i++) {
      let theta = Math.random() * Math.PI * 2;
      let phi = Math.acos(2 * Math.random() - 1);
      let r = Math.random() * 1000;
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      if (Math.random() > 0.7) {
        colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1; // White
      } else if (Math.random() > 0.5) {
        colors[i * 3] = 0.8; colors[i * 3 + 1] = 0.6; colors[i * 3 + 2] = 0.2; // Yellow
      } else {
        colors[i * 3] = 0.2; colors[i * 3 + 1] = 0.4; colors[i * 3 + 2] = 1; // Blue
      }
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      map: particleTexture,
      alphaTest: 0.5,
    });

    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    camera.position.set(0, 0, 900);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    const handleMouseMove = (event) => {
      let mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      let mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      camera.position.x = mouseX * 40;
      camera.position.y = mouseY * 40;
      camera.lookAt(0, 0, 0);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.removeChild(renderer.domElement);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const exploreGalaxy = () => {
    alert("🚀 Welcome to AVINYA 2024! Explore the cosmos!");
  };

  return (
    <div>

      {/* College Name */}
      <div className="college-name flex flex-auto justify-center">R.M.D. ENGINEERING COLLEGE</div>
      <div className="department flex justify-center">Department of &nbsp; <span className="highlight"> ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</span></div>
      <div className="presents flex justify-center">Presents</div>

      {/* Centered AVINYA Text */}
      <div className="title flex-auto justify-center" onClick={exploreGalaxy}>
        AVINYAA<sup className="sup-text">'25</sup>
      </div>

      {/* Spaceman Floating */}
      {/* <img
        className="spaceman"
        src={heroimg}
        alt="Spaceman"
      />
      <div className="dialog">Click on AVINYAA<sup>25</sup> to explore!</div> */}
    </div>
  );
};

export default LandingPage;