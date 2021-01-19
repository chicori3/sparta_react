import React from "react";
import { withRouter } from "react-router";

// Route를 먼저 불러와줍니다.
// Link 컴포넌트도 불러왔어요.
import { Route, Link } from "react-router-dom";

// 세부 페이지가 되어줄 컴포넌트들도 불러와주고요!
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat">Cat으로 가기</Link>
          <Link to="/dog">Dog으로 가기</Link>
        </div>

        <hr />
        {/* 실제로 연결해볼까요! */}
        <Route path="/" exact component={Home} />
        <Route path="/cat" component={Cat} />
        <Route path="/dog" component={Dog} />

        <button
          onClick={() => {
            // props에 있는 history를 사용합니다.
            // push([이동할 주소])는 페이지를 이동시켜 줍니다.
            this.props.history.push("/cat");
          }}
        >
          /cat으로 가기
        </button>
        <button
          onClick={() => {
            // goBack()은 뒤로가기 예요.
            this.props.history.goBack();
          }}
        >
          뒤로가기
        </button>
      </div>
    );
  }
}
// 내보내는 부분에서 withRouter로 감싸줍니다
export default withRouter(App);
