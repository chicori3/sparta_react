import React from "react";
import img from "./pat.png";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Message = (props) => {
  const name = useSelector((state) => state.quiz.name);

  return (
    <Container>
      <Outter>
        <Img src={img} alt="pat" />
        <h3>{name}에게 남기는 한 마디</h3>
        <TextBox
          className="text-box"
          type="textarea"
          rows="4"
          placeholder="내가 하고 싶은 말은 바로 .."
        ></TextBox>
        <Button className="button">남기고 랭킹 보기</Button>
      </Outter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 10vw;
  box-sizing: border-box;
  max-width: 400px;
  & > h3 {
    text-align: center;
    font-size: 1.5em;
    margin: 0 auto;
    line-height: 1.6;
  }
  & > span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

const Img = styled.img`
  width: 80%;
  margin: 16px;
`;

const TextBox = styled.textarea`
  padding: 10px;
  margin: 24px 0px;
  border: 1px solid #dadafc;
  border-radius: 10px;
  width: 100%;
`;

const Button = styled.div`
  padding: 8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  border: #dadafc;
`;

export default Message;
