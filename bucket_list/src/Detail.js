// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucket, updateBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();

  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);
  // url 파라미터에서 인덱스 가져오기
  let bucket_index = parseInt(props.match.params.index);

  return (
    <BucketContainer>
      <BucketTitle>{bucket_list[bucket_index].text}</BucketTitle>
      <ButtonContaienr>
        <button
          onClick={() => {
            //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
            dispatch(deleteBucket(bucket_index));
            props.history.goBack();
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            dispatch(updateBucket(bucket_index));
            props.history.goBack();
          }}
        >
          완료하기
        </button>
      </ButtonContaienr>
    </BucketContainer>
  );
};

const BucketContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContaienr = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    background: #1abc9c;
    color: white;
    border: 1px solid #1abc9c;
    margin: 20px;
    padding: 5px;
  }
`;

const BucketTitle = styled.h1`
  color: #16a085;
`;

export default Detail;
