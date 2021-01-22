import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const bucket_index = parseInt(props.match.params.index);

  return <div>{bucket_list[bucket_index]}</div>;
};

export default Detail;
