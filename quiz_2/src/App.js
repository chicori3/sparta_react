import React from "react";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // state에 필요한 데이터
      name: "뚱이",
      page: "quiz",
      list: [
        {
          question: "뚱이는 불가사리다",
          answer: "O",
        },
        {
          question: "뚱이는 친구가 없다",
          answer: "X",
        },
        {
          question: "뚱이는 돌 아래에서 산다",
          answer: "O",
        },
        {
          question: "뚱이는 귀엽다",
          answer: "O",
        },
      ],
      scoreMsg: "이 정도면 뚱이와 아주 친한 사이네요!",
    };
  }

  render() {
    return (
      <div className="App">
        {/* 조건부 렌더링  */}
        {this.state.page === "quiz" && <Quiz list={this.state.list} />}
        {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "score" && (
          <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />
        )}
      </div>
    );
  }
}

export default App;
