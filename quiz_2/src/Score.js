import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreContainer>
      <Header>
        <span>뚱이에</span> 대한
        <br /> 내 점수는?
      </Header>
      <MyScore>
        <span>95</span>점<p>뚱이에 대해 많이 알고 있네요!</p>
      </MyScore>
      <Button>랭킹보기</Button>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 1.5em;
  margin: 0;
  line-height: 1.4;
  & span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

const MyScore = styled.div`
  text-align: center;
  & span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }
  font-weight: 600;
  font-size: 2em;
  margin: 24px;
  & > p {
    margin: 24px 0;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Button = styled.button`
  padding: 8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  margin: 8px;
  border: 1px solid #dadafc;
  width: 80vw;
`;

export default Score;
