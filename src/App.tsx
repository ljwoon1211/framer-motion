import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 400px);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 10px;
`;

const Box = styled(motion.div)`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 1);
`;

const Button = styled(motion.button)<{ $isSwitch: boolean }>`
  margin-top: 50px;
  justify-self: center;
  background-color: #ffffff;
  border: ${(props) => (props.$isSwitch ? "0.5px solid blue" : "0.5px solid red")};
  color: ${(props) => (props.$isSwitch ? "blue" : "red")};
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
  const [boxId, setBoxId] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleBoxClick = (id: string) => setBoxId(id);
  const handleButtonClick = () => setIsSelected((prev) => !prev);

  return (
    <Container>
      <Wrapper>
        {["1", "2", "3", "4"].map((id, index) => (
          <Box
            key={id}
            layoutId={id}
            whileHover={{
              x: index % 2 === 0 ? -40 : 40,
              y: index < 2 ? -20 : 20,
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            onClick={() => setBoxId(id)}
          >
            <AnimatePresence>
              {(id === "2" && !isSelected) || (id === "3" && isSelected) ? (
                <Circle layoutId="Circle" />
              ) : null}
            </AnimatePresence>
          </Box>
        ))}
      </Wrapper>

      <AnimatePresence>
        {boxId && (
          <Overlay
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            onClick={() => setBoxId(null)}
          >
            <Box layoutId={boxId} initial={{ backgroundColor: "#ffffff" }} />
          </Overlay>
        )}
      </AnimatePresence>
      <Button onClick={handleButtonClick} $isSwitch={isSelected}>
        Switch
      </Button>
    </Container>
  );
}

export default App;
