import React from "react";
import "./App.css";
import Start from "./Start";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "리액트",
    };
  }
  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    );
  }
}

export default App;
