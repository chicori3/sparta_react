import React from "react";
import styled from "styled-components";
import { HourglassEmpty } from "@material-ui/icons";

const Spinner = (props) => {
  return (
    <Outter>
      <HourglassEmpty style={{ fontSize: "150px", color: "white" }} />
    </Outter>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1abc9c;
`;

export default Spinner;
