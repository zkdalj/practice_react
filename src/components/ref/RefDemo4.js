import React from 'react'

export default function RefDemo4() {
    let inputRef1;
    let inputRef2;

   const add = () => {
        const val1  = +inputRef1.value;
        const val2 = +inputRef2.value;
        alert(val1 + val2);
      };
        return (
          <>
            <h2>
                Addition using Ref
            </h2>
            <input ref={input=> { inputRef1 = input}} /> <br />
            <input ref={input=> { inputRef2 = input}}/> <br />
            <button onClick={add}>Add</button>
            </>
        );
      }
    
