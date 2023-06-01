import React, { Component } from 'react'

export default class StateDemo2 extends Component {
  state ={
    count:0,
    name:"abc"
  };

  increment = () =>{
    this.setState ({ count: this.state.count + 1, name:'xyz'})
  };
    render() {
    return (
      <div>
        <p>This is statedemo-2-</p>
        <p>This count is: {this.state.count}={this.state.name}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
