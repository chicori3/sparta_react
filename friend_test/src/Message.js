import React from "react";
import img from "./pat.png";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addRank } from "./redux/modules/rank";

const Message = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const answers = useSelector((state) => state.quiz.answers);
  const user_name = useSelector((state) => state.rank.user_name);
  const input_text = React.useRef(null);

  // 정답만 걸러내기
  let correct = answers.filter((answer) => {
    return answer;
  });

  // 점수 계산하기
  let score = (correct.length / answers.length) * 100;

  return (
    <Container>
      <Outter>
        <Img src={img} alt="pat" />
        <h3>{name}에게 남기는 한 마디</h3>
        <TextBox
          ref={input_text}
          className="text-box"
          type="textarea"
          rows="4"
          placeholder="내가 하고 싶은 말은 바로 .."
        ></TextBox>

        <Button
          className="button"
          onClick={() => {
            let rank_info = {
              score: parseInt(score),
              name: user_name,
              message: input_text.current.value,
              current: true,
            };

            // 랭킹 정보 넣기
            dispatch(addRank(rank_info));
            // 주소 이동
            props.history.push("/ranking");
          }}
        >
          남기고 랭킹 보기
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
  margin: -70px 16px 48px 16px;
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
