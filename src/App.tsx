import { motion } from 'framer-motion';
import React, { useRef } from 'react';
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
  background-color: rgba(255, 255,255,1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;

`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
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

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
 
  return (
    <Wrapper>
      {/* <Box transition={{duration:3}} animate={{borderRadius:"100px"}} /> */}
      {/* 애니메이션에 객체를 만든 후 initial, animate로 객체의 정보를 가져올 수 있다. 
        myVars 객체에 start, end를 만든 후 variants에 넣으면 사용가능
      */}
      <BiggerBox ref={biggerBoxRef}>
        <Box 
        drag 
        dragSnapToOrigin
        dragConstraints={biggerBoxRef}
        variants={boxVariants} whileHover="hover" whileDrag="drag" whileTap="click">
        </Box>
      </BiggerBox>
    </Wrapper>
  )
}

export default App;
