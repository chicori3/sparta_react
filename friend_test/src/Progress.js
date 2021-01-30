import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Progress = (props) => {
  const quiz_list = useSelector((state) => state.quiz.quiz);
  const answers = useSelector((state) => state.quiz.answers);
  let count = answers.length;

  return (
    <ProgressBar>
      <HighLight width={(count / quiz_list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  margin: 20px auto;
  margin-bottom: 40px;
  width: 80%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #fc8e76;
  width: ${(props) => props.width};
  height: 20px;
  transition: width 1s ease-in-out;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #fc8e76;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-left: -15px;
`;

export default Progress;
