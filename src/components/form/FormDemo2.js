import React, { useRef, useState } from "react";

export default function FormDemo2() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tandulkar"); 

  const ref1 = useRef();
  const ref2 = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fname + " " + lname);
    console.log(ref1.current.value + " " + ref2.current.value);
  };
const resetMyForm=()=>{
    document.getElementById('myForm').reset();
}

  return (
    <>
      <form onSubmit={submitHandler}  id='myForm' onReset={resetMyForm}> 
        First Name:  
        <input name="fname"  ref={ref1} />   
        <input name="lname"  ref={ref2} />
        <br />
        <br />
        <input type="submit" />
        <input type="reset" />
      </form>
    </>
  );
} 



// only take  value={fname}  is wrideble only
{/* <input name="fname" defaultValue="sachin" ref={ref1} />  
<input name="fname" defaultValue="tandulkar" ref={ref1} />    */}

// also take like that and that time  not need const [fname, setFname] = useState("sachin");
// const [lname, setLname] = useState("tandulkar"); 