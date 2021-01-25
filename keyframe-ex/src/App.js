import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <div className="App">
      <Box />
    </div>
  );
}

const move = keyframes`
  0% {
    top:20px;
    opacity:1;
    background-color:olive;
  }
  
  50% {
    top:200px;
    left:200px;
    opacity:1;
    background-color:aquamarine;
  }
  
  100% {
    left:20px;
    top:20px;
    opacity:1;
    background-color:olive;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: olive;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 1;
  animation: ${move} 2s 1s infinite;
`;

export default App;
