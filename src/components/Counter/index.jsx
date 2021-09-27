import React, { Component } from 'react';
import  './../../App'
class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      value:0,
      click:1,
      time:new Date(0, 0, 0, 0, 0, 0, 0),
    }
    this.intervalId = null;
  }
  getClick=()=>{
    const {value}=this.state;
    const {step}=this.props;
    
    this.setState({
      value:step +value
    })
  }
  start=()=>{
    
    this.intervalId = setInterval(this.tick,1000)
  }
  tick=()=>{
    const {value,time}=this.state;
    const {step}=this.props;
    const newTime = new Date(time.getTime() + 1000);
    this.setState({
      time:newTime,
      value:step +value
    })
    setTimeout(()=>{clearInterval(this.intervalId)},10000);
   
  
  }

  // При запуске приложения сразу запускает автоклик  
  /* componentDidMount() {
    this.start();
  } */
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {value,time}=this.state;
    const {step}=this.props;
    return (
      <div>
        <h1>Счет: {value}</h1>
        <h2>Будет изменено на:{step}</h2>
        <h3>Time: {time.toLocaleTimeString()}</h3>
        <button onClick={this.getClick}>Click</button>
        <button onClick={this.start}>Auto Click</button>

      </div>
    );
  }
}

export default Counter;
