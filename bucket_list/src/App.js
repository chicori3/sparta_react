import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import BucketList from "./BucketList";
import Progress from "./Progress";
import Detail from "./Detail";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { loadBucket, createBucket } from "./redux/modules/bucket";

import { firestore } from "./firebase";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucket());
  },
  create: (new_item) => {
    dispatch(createBucket(new_item));
  },
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    const bucket = firestore.collection("bucket2");

    bucket.doc("bucket_item").set({ text: "다키스트 던전", completed: false });

    // bucket.get().then((docs) => {
    //   let bucket_data = [];

    //   docs.forEach((doc) => {
    //     if (doc.exists) {
    //       bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
    //     }
    //   });

    //   console.log(bucket_data);
    // });

    // DB 컬렉션 데이터 추가하기
    // bucket.add({ text: "디스코 엘리시움", completed: false }).then((docRef) => {
    //   console.log(docRef);
    //   console.log(docRef.id);
    // });

    // DB 컬렉션 데이터 수정하기
    // bucket.doc("bucket_item1").update({ text: "첨탑 오르기" });

    // DB 컬렉션 데이터 삭제하기
    // bucket.doc("bucket_item2").delete((docRef) => {
    //   console.log("삭제하기");
    // });
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress />
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
          <Switch>
            <Route path="/" exact component={BucketList} />
            <Route path="/detail/:index" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          ⬆
        </button>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & button {
    width: 25%;
    background: #1abc9c;
    color: white;
    border: 1px solid #1abc9c;
  }
  & * {
    padding: 5px;
  }
  & input {
    width: 70%;
    &:focus,
    :hover {
      border: 3px solid #16a085;
    }
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: #16a085;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
