import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("이제 그만");
    }
  };

  render() {
    const nemo_count = Array.from(
      { length: this.state.count },
      (a, index) => index
    );
    console.log(nemo_count);
    return (
      <div className="App">
        <Nemo />
      </div>
    );
  }
}

export default App;
