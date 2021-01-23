import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
  ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // state에 필요한 데이터
      name: "뚱이",
      page: "message",
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
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/score" exact component={Score} />
          <Route path="/message" exact component={Message} />
          <Route path="/ranking" exact component={Ranking} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
