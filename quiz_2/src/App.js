import React from "react";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <Quiz /> */}
        <Score />
      </div>
    );
  }
}

export default App;
