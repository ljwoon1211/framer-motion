import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg,rgb(2));
`
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  /* background-color: white; */
  background-color: rgba(255, 255,255,1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  /* display: grid; */
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;

const boxVariants = {
  hover: {scale:1.5, roatateZ:90},
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },

}

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255,255,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Svg = styled.svg`
width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

const box = {
  entry:(isBack:boolean)=>({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }), 
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack:boolean)=>({ 
    x: isBack? 500: -500, 
    opacity: 0, 
    scale: 0, 
    transition: { duration: 1 } 
  }),
};



function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
    <Box>
      {!clicked ? (
        <Circle layoutId="circle" style={{ borderRadius: 50 }} />
      ) : null}
    </Box>
    <Box>
      {clicked ? (
        <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
      ) : null}
    </Box>
  </Wrapper>
  )
}

export default App;
