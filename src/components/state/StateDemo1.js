import React from "react";

export default function StateDemo1() {   //it is only show on console  not page because it is a count is a class lavel varible its not part of state object how to make is part of state object every will change it UI will be re render
  let count = 0;

  const increment = () => {
    count = count + 1;
    console.log("count:" + count);
  };

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
