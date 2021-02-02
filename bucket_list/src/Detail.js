// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import {
  deleteBucket,
  deleteBucketFB,
  updateBucket,
  updateBucketFB,
} from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();

  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);
  // url 파라미터에서 인덱스 가져오기
  let bucket_index = parseInt(props.match.params.index);

  return (
    <BucketContainer>
      <BucketTitle>{bucket_list[bucket_index].text}</BucketTitle>
      <ButtonGroup>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => {
            //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
            dispatch(deleteBucketFB(bucket_index));
            props.history.goBack();
          }}
        >
          삭제하기
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={() => {
            dispatch(updateBucketFB(bucket_index));
            props.history.goBack();
          }}
        >
          완료하기
        </Button>
      </ButtonGroup>
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

const BucketTitle = styled.h1`
  color: #16a085;
`;

export default Detail;
