import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

const Earth = (props) => {
  const { nodes, materials, scene } = useGLTF("earth/scene.gltf");
  //   const { nodes, materials } = useGLTF("models/rough.gltf");
  const texture = useTexture("earth/textures/TERRE_emissive.jpeg");
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });
  console.log("nodes.....", nodes);


  
//   const groupedObject = new THREE.Object3D();

//   // Add child objects to the groupedObject
//   groupedObject.add(nodes.EARTHLayer1);
//   groupedObject.add(nodes.EARTHLayer2);
//   groupedObject.add(nodes.EARTHLayer3);
//   groupedObject.add(nodes.EARTHLayer4);
//   groupedObject.add(nodes.EARTHLayer5);
//   groupedObject.add(nodes.EARTHLayer6);
//   groupedObject.add(nodes.EARTHLayer7);
//   groupedObject.add(nodes.EARTHLayer8);

  return (
    <group {...props} dispose={null}>
      <motion.group
        rotation={[-Math.PI / 2, 0, 0]}
        // animate={{
        //   x: -2,
        // }}
      >
        <hemisphereLight intensity={5} groundColor="black" />
        <pointLight intensity={3} />
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
          scale={3.75}
          // position={
          //   isMobile
          //     ? [-3, -3, -2.2]
          //     : updatedPosition.length > 0
          //     ? updatedPosition
          //     : [0, -3.25, -1.5]
          // }
          // rotation={[-0.01, -0.2, -0.04]}
        />
        {/* <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer1_TERRE_0.geometry}
            material={textureMaterial}
            name="EARTHLayer1_TERRE_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer2_NUAGES_0.geometry}
            material={textureMaterial}
            name="EARTHLayer2_NUAGES_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer3_01_0.geometry}
            material={textureMaterial}
            name="EARTHLayer3_01_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer4_02_0.geometry}
            material={textureMaterial}
            name="EARTHLayer4_02_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer5_03_0.geometry}
            material={textureMaterial}
            name="EARTHLayer5_03_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer6_04_0.geometry}
            material={textureMaterial}
            name="EARTHLayer6_04_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer7_05_0.geometry}
            material={textureMaterial}
            name="EARTHLayer7_05_0"
          />
        </group>
        <group name={groupedObject}>
          <mesh
            geometry={nodes.EARTHLayer8_06_0.geometry}
            material={textureMaterial}
            name="EARTHLayer8_06_0"
          />
        </group> */}
      </motion.group>
    </group>
  );
};

useGLTF.preload("earth/scene.gltf");

export default Earth;
