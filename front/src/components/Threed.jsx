import React, { useRef, useEffect } from 'react';
import { AmbientLight } from 'three';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeDModel = () => {
  const controlsRef = useRef();
  const objectRef = useRef();

  const handleCreated = ({ gl, camera, scene }) => {
    // Add OrbitControls
    const controls = new OrbitControls(camera,gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor =0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controlsRef.current = controls;

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load('/react/scene.gltf', function (gltf) {
      // Example scaling
      gltf.scene.scale.set(3, 3, 3);

      // Add the loaded model to the scene
      scene.add(gltf.scene);
      objectRef.current = gltf.scene; // Store a reference to the object
    });
    const ambientLight = new AmbientLight(0xffffff); // You can adjust the color here
    scene.add(ambientLight);
    // Animation loop
    const animate = () => {
      if (controlsRef.current && objectRef.current) {
        controlsRef.current.update();
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  const handleMouseMove = (e) => {
    // Check if the object and controls are initialized
    if (objectRef.current && controlsRef.current) {
      // Move the object based on mouse coordinates
      const mouseX = (window.innerWidth / 2 - e.clientX) / 80;
      const mouseY = (window.innerHeight / 2 - e.clientY) / 80;

      objectRef.current.rotation.y = mouseX;
      objectRef.current.rotation.x = mouseY;
    }
  };

  return (
    <Canvas
      className='d3_model'
      camera={{ position: [0, 0, 10], fov: 75 }}
      onPointerMove={handleMouseMove}
      onCreated={handleCreated}
    />
  );
};

export default ThreeDModel;
