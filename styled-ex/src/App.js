import React from "react";
// 패키지에서 styled를 불러올게요!
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      {/* props로 bgColor를 줘볼까요! */}
      <MyStyled bgColor를={"red"}>hello React!</MyStyled>
    </div>
  );
}

// scss처럼 자기 자신을 지칭할 때 &를 쓸 수 있습니다!
// props 주는 방법! 이제 알고 있죠?
const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover {
    background-color: #ddd;
  }
  background-color: ${(props) => (props.bgColor를 ? "red" : "purple")};
`;
export default App;
