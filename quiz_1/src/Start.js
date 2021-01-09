import React from "react";
import logo from "./logo.svg";

const Start = (props) => {
  const name = props.name;

  return (
    <div className="container">
      <div className="outter">
        <img className="scc-img" src={logo} alt="logo"></img>
        <h3>
          나는 <span>{name}</span>에 대해서 얼마나 알고 있을까?
        </h3>
        <input className="text-box" type="text" placeholder="내 이름"></input>
        <button className="button">시작하기</button>
      </div>
    </div>
  );
};

export default Start;
