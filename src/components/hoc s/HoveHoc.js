import React from 'react'
import UpdatedComponent from './CounterHoc'

function HoverHoc(props) {
  return (
    <button onMouseOver={props.increment}>Clicked 
    {props.count} Times</button>
  );
}
export default UpdatedComponent(HoverHoc);
