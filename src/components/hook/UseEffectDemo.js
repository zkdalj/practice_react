import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
 const [a, setA] = useState(10);
 const [b, setB] = useState(20);
 const [c, setC] = useState(30);

 useEffect(() => { //once are function and 2 once array
    console.log("UseEffect called...");
 },[a, b]); //one time called only "a" changes called  

 console.log('Render...');
 return (
     <>
 <div>This is use Effect Example</div>
 <div>a value is {a}</div>
 <div>b value is {b}</div>
 <div>c value is {c}</div>

 <button onClick={() => setA(a + 1)}>Update-A</button>
 <button onClick={() => setB(b + 1)}>Update-B</button>
 <button onClick={() => setC(c + 1)}>Update-C</button>

 </>

);
}
