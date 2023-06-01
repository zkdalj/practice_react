import React, { useState } from "react";

export default function FormDemo4() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");
  const [fNameErrorMsg, setfNameErrorMsg] = useState(" ");
  const [lNameErrorMsg, setlNameErrorMsg] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname);
  };

    const chnageHandler = (e) => {
    const inputField = e.target.name;
    if (inputField == "fname") {
        setFname(e.target.value);
        if (!e.target.value) {
        setfNameErrorMsg("firstname should not be empty");
    } else if (e.target.value.length < 5) {
        setfNameErrorMsg("fistName should have at least 5 chars");
    }else {
        setfNameErrorMsg (" ");
    }
    } else if (inputField == "lname") {
        setLname(e.target.value);
        if (!e.target.value) {
            setlNameErrorMsg("lastname should not bet empty");
        }else if (e.target.value.length < 5){
            setlNameErrorMsg("lastname should have at least 5 chars");
        }else {
            setlNameErrorMsg(" ");
        }
    } else {

    }
  };

  return <>
       <form onSubmit={submitHandler}>
    
        First Name:
        <input name="fname" value={fname} onChange={chnageHandler} />
        <span className="text-danger">{fNameErrorMsg}</span> <br/>
        Last Name:
        <input name="lname" value={lname} onChange={chnageHandler}/>
        <span className="text-danger">{lNameErrorMsg}</span>
       
        <br /><br />
        <button>submit</button>
       </form>
  </>;
}
