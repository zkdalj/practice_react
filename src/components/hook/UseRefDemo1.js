import React, { useEffect, useRef, useState } from "react";

export default function UseRefDemo1() {   // capture curent valu and before value
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] =useState(0) // this is the another way also
  const myRef = useRef(0);

  useEffect(() => {
    myRef.val = count;
  });

  return (
    <h1>
      Now: {count}, before: {myRef.val}, prev value {prevCount}
      <button
        onClick={() => {
          setCount(count + 1);
          setPrevCount(count);
        }}
      >Increment</button>
    </h1>
  );
}


//refs (template reference variable )
//