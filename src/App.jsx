import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

import heroPattern from "./assets/herobg.png";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import Contact from "./components/Contact";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 40 }}>
          <color attach="background" args={["#1a1a1a"]} />
          <ScrollControls
            pages={4}
            damping={0.1}
            // style={{ overflowY: "hidden" }}
          >
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
      <Leva hidden />

      {/* <Contact /> */}
    </>
  );
}

export default App;
