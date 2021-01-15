import React from "react";

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);

  const addNemo = () => {
    setCount(count + 1);
  };
  const removeNemo = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const nemo_count = Array.from({ length: count }, (a, index) => index);
  return (
    <div className="App">
      {nemo_count.map((num, index) => {
        return (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#eee",
              margin: "10px",
            }}
          >
            nemo
          </div>
        );
      })}
      <button onClick={addNemo}>추가</button>
      <button onClick={removeNemo}>삭제</button>
    </div>
  );
};

export default Nemo;
