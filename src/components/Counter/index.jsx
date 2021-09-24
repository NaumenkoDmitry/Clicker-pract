import React, { Component } from 'react';
import  './../../App'
class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
      value:0,
      click:1,
      amount:3
    }
  }
  getClick=()=>{
    const {value}=this.state;
    const {step}=this.props;
    
    this.setState({
      value:value+step
    })
  }
  render() {
    const {value}=this.state;
    const {step}=this.props;
    return (
      <div>
        <h1>Счет: {value}</h1>
        <h2>Будет изменено на:{step}</h2>
        <button onClick={this.getClick}>Click</button>
      </div>
    );
  }
}

export default Counter;
