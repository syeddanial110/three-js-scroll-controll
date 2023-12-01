import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";
import * as THREE from "three";

const Office = ({ section, ...props }) => {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, 1);
    // animate(textureOpacity, section === 0 ? 1 : 0);
    animate(glassTextureOpacity, 0.42);
    // animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });

  console.log("nodes///////////", nodes);


  return (
    <group {...props} dispose={null}>
      <motion.group
        name="Desk"
        // position={section == 1 ? [-1.3, -7.58, -1.34] : [-0.07, 0, -1.52]}
        position={[-0.07, 0, -1.52]}
        animate={{
          x: section === 1 && -1.3,
          y: section === 1 && -7.58,
        }}
        rotation={[0, -Math.PI / 1.8, 0]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <motion.group
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="LavaLamp"
        position={[-1.3, 2.07, -1.99]}
      >
        <mesh
          name="Node-Mesh001"
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_1"
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_2"
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.mesh
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="WawaRug"
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.28, 0.01, 0.76]}
      />
      <motion.group
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="salameche"
        position={[-0.61, 2.04, -1.96]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        name="keyboard"
        position={section === 1 ? [-1.6, -6.6, -1.42] : [-0.04, 0.98, -1.35]}
        // position={[-0.04, 0.98, -1.35]}
        // animate={{
        //   x: section === 1 && -1.6,
        //   y: section === 1 && -6.6,
        //   z: section === 1 && -1.42,
        // }}
        rotation={[0, -0.17, 0]}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[1, 1, 1]}
        animate={{
          // scale: section === 0 ? 1 : 0,
          x: section === 1 ? -1.3 : 0.45,
          y: section === 1 ? -6.5 : 0.94,
          z: section === 1 ? -1.5 : -1.72,
        }}
        name="iMac"
        // position={[0.45, 0.94, -1.72]}  [-1.3, -7.58, -1.34]
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1"
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        position={section === 1 ? [-1.4, -7.5, 0.07] : [0, 0, 0]}
        animate={{
          x: section === 1 ? -1.4 : 0,
          y: section === 1 ? -7.5 : 0,
          z: section === 1 ? 0.07 : 0,
        }}
      >
        <mesh
          name="Comp_Mouse"
          geometry={nodes.Comp_Mouse.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="plant"
        position={[-0.78, 1.07, -1.61]}
      >
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="Houseplant_7"
        position={[-2.02, -0.04, -1.53]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[1, 1, 1]}
        animate={
          {
            // scale: section === 0 ? 1 : 0,
          }
        }
        name="palm_tree_01"
        position={[2.13, -0.08, -1.06]}
        rotation={[-Math.PI, 0.67, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <motion.group
        scale={[1, 1, 1]}
        animate={{
          // scale: section === 0 ? 1 : 0,
          x: section === 1 ? -1.9 : -0.28,
          y: section === 1 ? -7.7 : 0,
          z: section === 1 ? 0.1 : -0.71,
        }}
        name="Chair"
        position={[-0.28, 0, -0.71]} // [-1.3, -7.58, -1.34]
        rotation={[0, -0.5, 0]}
        // rotation={[0, -0.38, 0]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </motion.group>
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={nodes.Plane001_3.geometry}
        material={textureGlassMaterial}
      />
    </group>
  );
};
useGLTF.preload("models/scene.gltf");

export default Office;
