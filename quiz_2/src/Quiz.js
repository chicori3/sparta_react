import React from "react";
import styled from "styled-components";
import img from "./pat.png";

const Quiz = (props) => {
  return (
    <QuizContainer>
      <p>
        <span>5번 문제</span>
      </p>
      <h1>뚱이는 귀여운가요?</h1>
      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>
      <DragItem>
        <div>
          <img src={img} alt="pat" />
        </div>
      </DragItem>
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  font-weight: 600;
  color: #dadafc77;
`;

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  & > div {
    text-align: center;
    width: 170px;
    background-color: #ffd6aa;
    border-radius: 50%;
  }
  & img {
    max-width: 120px;
    opacity: 95%;
  }
`;

export default Quiz;
