import React, { useState } from 'react'

export default function FormDemo1() {
    const [fName,setFname] = useState('Sachin');
    const [lName,setLname] = useState('Tendulkar');

    
    const submitHandler = (e) =>{
        e.preventDefault();
        alert (fName+''+lName);

    }

  return  <>   
     <h3>FormDemo1</h3>
     <form onSubmit={submitHandler}>
     First Name:
     <input name = 'fName' value={fName} onChange={(e)=>setFname(e.target.value)} />
     Last Name:
     <input name = 'lName' value={lName}  onChange={(e)=>setLname(e.target.value)} />
    <br></br>

    <input type='submit' />
    <input type='reset' />

    <button>btn</button>                      
    
    </form>
    </>
  
}
//if any other btn inside the form his consider as submit button 