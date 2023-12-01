import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

const Ring = (props) => {
  const { nodes, materials } = useGLTF("models/ring.gltf");
  // const { nodes, materials } = useGLTF("models/rough.gltf");
  const texture = useTexture("textures/DefaultMaterial_baseColor.jpeg");
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });
  // console.log("nodes", nodes);
  return (
    <group {...props} dispose={null}>
      <motion.group
        rotation={[-Math.PI / 2, 0, 0]}
        animate={{
          x: -2,
        }}
      >
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          //   material={materials.DefaultMaterial}
          material={textureMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </motion.group>
    </group>
  );
};

useGLTF.preload("models/ring.gltf");

export default Ring;
