import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 400px);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: white;
  opacity: 0.5;
  width: 400px;
  height: 200px;
`;

const Button = styled(motion.button)`
  background-color: white;
  border: 0.5px solid blue;
  color: blue;
  border-radius: 10px;
  width: 80px;
  height: 30px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [id, setId] = useState<string | null>(null);
  const handleBoxClick = (id: string) => setId(id);

  return (
    <>
      <Wrapper>
        <Box
          layoutId={"1"}
          onClick={() => handleBoxClick("1")}
          whileHover={{
            x: -40,
            y: -20,
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
        <Box
          layoutId={"2"}
          onClick={() => handleBoxClick("2")}
          whileHover={{
            x: 40,
            y: -20,
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
        <Box
          onClick={() => handleBoxClick("3")}
          whileHover={{
            x: -40,
            y: 20,
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
        <Box
          onClick={() => handleBoxClick("4")}
          whileHover={{
            x: 40,
            y: 20,
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
        {id ? (
          <Overlay
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            onClick={() => setId(null)}
          >
            <Box layoutId={id}>{id}</Box>
          </Overlay>
        ) : null}
        <Button>Switch</Button>
      </Wrapper>
    </>
  );
}

export default App;
