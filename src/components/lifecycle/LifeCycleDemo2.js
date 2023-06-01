import React, { Component } from 'react'
import LifeCycleDemo3 from './LifeCycleDemo3'

export default class LifeCycleDemo2 extends Component {
  state = { flag: true };
  render() {
    return (
      <div>
       <h1> This is LifeCycleDemo2 component</h1>
      <button onClick={() => {
        this.setState({ flag: !this.state.flag });
      }}
      >
click here
      </button>
      {this.state.flag? <LifeCycleDemo3 /> : null}
      </div>
    );
  }
}
