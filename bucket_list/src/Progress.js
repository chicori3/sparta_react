import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  let count = 0;

  bucket_list.map((l, index) => {
    if (l.completed) {
      count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #16a085;
  width: ${(props) => props.width};
  height: 20px;
  transition: width 1s ease-in-out;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #16a085;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-left: -15px;
`;

export default Progress;
