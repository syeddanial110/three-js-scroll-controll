import { OrbitControls } from "@react-three/drei";
import Office from "./Office";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../../config";
import { Avatar } from "./Avatar";
import { useEffect, useState } from "react";
import Ring from "./Ring";
import { SceneOffice } from "../../SceneOffice";
import Earth from "./Earth";

const Experience = ({ section = 0 }) => {
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // useEffect(() => {
  //   animate(cameraPositionX, menuOpened ? -5 : 0, {
  //     ...framerMotionConfig,
  //   });
  //   animate(cameraLookAtX, menuOpened ? 5 : 0, {
  //     ...framerMotionConfig,
  //   });
  // }, [menuOpened]);

  // useFrame((state) => {
  //   state.camera.position.x = cameraPositionX.get();
  //   state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  // });

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 0, 3]}
        scale={[1, 1.1, 1]}
        rotation-y={-Math.PI / 4}
        animate={
          {
            // y: section === 0 ? 0 : 0,
            // scale: [2, 1, 2],
            // scale: [1, 1.1, 1],
          }
        }
        transition={
          {
            // duration: 4,
            // times: [0, 0.2, 0.5, 0.8, 1],
            // repeat: Infinity,
            // repeatDelay: 0.1,
          }
        }
      >
        <Office section={section} />
        {/* <SceneOffice section={section} /> */}
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -2.5, -15]}
        animate={{
          z: section === 1 ? 2.3 : 2.2,
          // z: section === 1 ? 1 : -15,
          y: section === 1 ? -viewport.height - 0 : 0.5,
          x: section === 1 ? 0.1 : -0.8,
          rotateY: -7.3,
        }}

        // rotation={[3, 3, 3.12]}
      >
        <group
          scale={section === 1 ? [1.5, 1.5, 1.5] : [1, 1, 1]}
          position-y={-0.5}
          rotation={section === 1 ? [-30, 3, 25.12] : [1.5, 3.1, -20.3]}
        >
          <Avatar animation={section === 0 ? "Standing" : "Typing"} />
        </group>
      </motion.group>

      {/* Ring */}
      <motion.group
        position={[0, -2.5, -10]}
        animate={{
          z: section === 2 ? 3 : -15,
          y: section === 2 ? -viewport.height - 8 : -1.5,
          rotateX: 4.9,
        }}
        // rotation={[3, 3, 3.12]}
      >
        <group
          scale={[2, 2, 2]}
          position-y={2.5}
          rotation={section === 2 ? [-60, 3, 30.12] : [2.5, -2.5, 10]}
        >
          <Ring />
        </group>
      </motion.group>

      {/* Earth */}
      {/* <motion.group
        position={[0, -2.5, -10]}
        animate={{
          z: section === 2 ? 3 : -15,
          y: section === 2 ? -viewport.height - 8 : -1.5,
          rotateX: 4.9,
        }}
        // rotation={[3, 3, 3.12]}
      >
        <group
          scale={[1, 1, 1]}
          position-y={2.5}
          rotation={section === 2 ? [-60, 3, 30.12] : [2.5, -2.5, 10]}
        >
          <Earth />
        </group>
      </motion.group> */}
    </>
  );
};

export default Experience;
