import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 1,
      change: true,
    };
  }
  onClicks = () => {
    const { values, change } = this.state;
    this.setState({
      values: change ? values + 1 : values - 1,
    });
  };
  onChange = () => {
    const { change } = this.state;
    this.setState({
      change: !change,
    });
  };
  render() {
    const { values, change } = this.state;
    return (
      <div>
        <button onClick={(e) => this.onClicks(e)}>{change ? "+" : "-"}</button>
        <button onClick={(e) => this.onChange(e)}>Сменить режим</button>
        <Counter step={values} />
      </div>
    );
  }
}

export default App;
