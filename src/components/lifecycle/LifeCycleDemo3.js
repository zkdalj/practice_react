import React, { Component } from 'react'

export default class LifeCycleDemo3 extends Component {
intervalID = 0; //2.1,3.1

componentDidMount() {
  //this.intervalID = setInterval(console.log, 1000, "hiii"); //2.2
  this.intervalID = setInterval(() =>{ //3.2
    console.log(new Date().toLocaleTimeString())
    document.getElementById('myTime').innerText = new Date().toLocaleTimeString();
  },1000);
}  
  render() {
    //setInterval(() => { console.log('hiiii')},1000); //1 keep calling  my method after1sec
    console.log('render...');
    return<div> <div>this is LifeCycleDemo3 component</div>
    <h3>current time is:<span id="myTime"></span></h3>
    </div>;
  }
  componentWillUnmount() {
    console.log('component will unmount...');
    clearInterval(this.intervalID); //2.3,3.3 exp navbar home page click that time home page loaded not meaning of other aboutus, career, cotact us page loaded taht time use setinterval
  }// hii loading click button hii stop loading
}
