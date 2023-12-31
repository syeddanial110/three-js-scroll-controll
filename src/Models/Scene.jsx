/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/earth/scene.gltf 
Author: Stéphane Agullo (https://sketchfab.com/sa3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-5ce4b1465c83432d9bb7e3c30232c02b
Title: EARTH
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import sceneGltf from "../../public/earth/scene.gltf";

export function EarthCan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./earth/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0}>
          <group
            name="5fbd3316863b4d98adffc1dec302e69efbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="EARTHLayer1">
                  <mesh
                    name="EARTHLayer1_TERRE_0"
                    geometry={nodes.EARTHLayer1_TERRE_0.geometry}
                    material={materials.TERRE}
                    scale={3.75}
                  />
                </group>
                <group name="EARTHLayer2">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer2_NUAGES_0"
                    geometry={nodes.EARTHLayer2_NUAGES_0.geometry}
                    material={materials.NUAGES}
                  />
                </group>
                <group name="EARTHLayer3">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer3_01_0"
                    geometry={nodes.EARTHLayer3_01_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group name="EARTHLayer4">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer4_02_0"
                    geometry={nodes.EARTHLayer4_02_0.geometry}
                    material={materials.material_3}
                  />
                </group>
                <group name="EARTHLayer5">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer5_03_0"
                    geometry={nodes.EARTHLayer5_03_0.geometry}
                    material={materials.material_4}
                  />
                </group>
                <group name="EARTHLayer6">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer6_04_0"
                    geometry={nodes.EARTHLayer6_04_0.geometry}
                    material={materials.material_5}
                  />
                </group>
                <group name="EARTHLayer7">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer7_05_0"
                    geometry={nodes.EARTHLayer7_05_0.geometry}
                    material={materials.material_6}
                  />
                </group>
                <group name="EARTHLayer8">
                  <mesh
                    scale={3.75}
                    name="EARTHLayer8_06_0"
                    geometry={nodes.EARTHLayer8_06_0.geometry}
                    material={materials.material_7}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./earth/scene.gltf");
