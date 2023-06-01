import React from 'react' //function component
import propTypes from 'prop-types';

export default function Greet({name, msg, age, children}) { //it is props de- structure
  return (
    <div>
        Hello {name}  {msg} you are {age} years old.
        <br/>
        {children} 
        </div>

  );
}
Greet.propTypes = {  // it not mandetary but it is a good it is propType
    name:propTypes.string.isRequired, //if you not pass name give a error  required prop
    msg:propTypes.string, //optional prop
    age:propTypes.number,
};


// export default function Greet(props) {
//   return (
//     <div>Hello {props.name}  {props.msg} you are {props.age} years old.</div>
//   );
// }

// import React, { Component } from 'react' //class component

// export default class Greet extends Component {
//   render() {
// let {name, msg, age } = this.props; //de-structuring 
//      return (
//     <div>Hello {name}  {msg}, you are {age} years old.</div>

//     ) 


    // return (
    // <div>Hello {this.props.name}  {this.props.msg}, you are {this.props.age} years old.</div>

    // )
//   }
// }

