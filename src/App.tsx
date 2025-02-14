import { motion } from 'framer-motion';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  /* background-color: white; */
  background-color: rgba(255, 255,255,0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border-radius: 40px;
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;

const myVars = {
 start:{scale:0},
 end: {
  scale:1, rotateZ:360, transition:{
    type:"spring",delay:0.5
  }
 }
}

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
 
  return (
    <Wrapper>
      {/* <Box transition={{duration:3}} animate={{borderRadius:"100px"}} /> */}
      {/* 애니메이션에 객체를 만든 후 initial, animate로 객체의 정보를 가져올 수 있다. 
        myVars 객체에 start, end를 만든 후 variants에 넣으면 사용가능
      */}
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} initial="start" animate="end"/>
        <Circle variants={circleVariants} initial="start" animate="end"/>
        <Circle variants={circleVariants} initial="start" animate="end"/>
        <Circle variants={circleVariants} initial="start" animate="end"/>
      </Box>
    </Wrapper>
  )
}

export default App;
