import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

export const Earth = ({ isMobile }) => {
  const { scene, nodes, animations } = useGLTF("./earth/scene.gltf");
  const myMesh = useRef();
  // useFrame((e) => {
  //   console.log("Hey, I'm executing every frame!", e);
  // });

  // useFrame(({ clock }) => {
  //   myMesh.current.rotation.x = clock.getElapsedTime();
  //   console.log("myMesh.current", myMesh.current);
  // });

  // const { actions } = useAnimations(animations, scene)
  // const scroll = useScroll()

  // console.log("nodes", nodes);
  // console.log("animations", animations);

  const [updatedPosition, setUpdatedPosition] = useState([]);
  const [updatedRotation, setUpdatedRotation] = useState([]);
  const [updatedScale, setUpdatedScale] = useState();

  useEffect(() => {
    if (window.scrollY > 80) {
      setUpdatedPosition([2, -3.25, -5.5]);
      setUpdatedRotation([-0.01, -1.2, -0.04]);
      setUpdatedScale(0.25);
    }
  }, [window.scrollY]);

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
        scale={isMobile ? 0.5 : 3.75}
        // position={
        //   isMobile
        //     ? [-3, -3, -2.2]
        //     : updatedPosition.length > 0
        //     ? updatedPosition
        //     : [0, -3.25, -1.5]
        // }
        // rotation={[-0.01, -0.2, -0.04]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handelMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handelMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      style={{ height: "500px", width: "100%" }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
      />
      <Earth isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
