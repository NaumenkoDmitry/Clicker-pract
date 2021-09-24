import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 1,
    };
  }

  onClicksPlus = () => {
    const { values } = this.state;
    this.setState({
      values: values + 1,
    });
  };
  onClicksMinus = () => {
    const { values } = this.state;
    this.setState({
      values: values - 1,
    });
  };
  render() {
    const { values } = this.state;
    return (
      <div>
        <input value={values}></input>

        <button onClick={this.onClicksPlus}>+1</button>
        <button onClick={this.onClicksMinus}>-1</button>
        <Counter step={values} />
      </div>
    );
  }
}

export default App;
