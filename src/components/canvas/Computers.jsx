import React, { useRef } from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import EarthCanvas, { Earth } from "./Earth";
import { EarthCan } from "../../Models/Scene";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Computers = ({ isMobile }) => {
  const { width, height } = useThree((state) => state.viewport);
  const { scene, nodes, animations } = useGLTF("./desktop_pc/scene.gltf");
  const myMesh = useRef();
 
  const scroll = useScroll();

 

  return (
    <mesh ref={myMesh}>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-3, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.04]}
      
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");

  //   setIsMobile(mediaQuery.matches);

  //   const handelMediaQueryChange = (e) => {
  //     setIsMobile(e.matches);
  //   };

  //   mediaQuery.addEventListener("change", handelMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handelMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      dpr={[1, 1.5]}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        // autoRotate={true}
      />
      <Computers isMobile={isMobile} />
      {/* <ScrollControls damping={2} pages={3}>
       
        <Scroll html>
     
          <h1
            style={{
              position: "absolute",
              top: "60vh",
              left: "0.5em",
              color: "white",
              fontSize: "80px",
            }}
          >
            to
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "120vh",
              left: "60vw",
              color: "white",
              fontSize: "80px",
            }}
          >
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
              color: "white",
            }}
          >
            home
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "298.5vh",
              left: "0.5vw",
              fontSize: "40vw",
              color: "white",
            }}
          >
            home
          </h1>
        </Scroll>
      </ScrollControls> */}

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
