import React from "react";
import img from "./pat.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "./redux/modules/rank";

const Start = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const input_text = React.useRef(null);

  return (
    <Container>
      <Outter>
        <Img src={img} alt="pat" />
        <h3>
          나는 <span>{name}</span>에 대해서 얼마나 알고 있을까?
        </h3>
        <TextBox
          ref={input_text}
          className="text-box"
          type="text"
          placeholder="내 이름"
        ></TextBox>
        <Button
          className="button"
          onClick={() => {
            dispatch(addUserName(input_text.current.value));
            props.history.push("/quiz");
          }}
        >
          시작하기
        </Button>
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

const TextBox = styled.input`
  padding: 10px;
  margin: 24px 0px;
  border: 1px solid #dadafc;
  border-radius: 30px;
  width: 100%;
`;

const Button = styled.div`
  padding: 8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  border: #dadafc;
`;

export default Start;
