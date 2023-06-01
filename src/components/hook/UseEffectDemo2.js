import React, {useEffect, useState} from 'react'

export default function UseEffectDemo2() {
  //you want to fatch the data from api particulare user and render
  let [userId, setUserId] = useState(0);
  let [user, setUser] = useState({
    name:"",
    email:"",
    address: {city:""},
  });
let [count, setCount] = useState(0);

 useEffect(() => {
  console.log("use effect");
  async function fetchData(){
    console.log('getData called...')
  let response = await fetch (
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  let data = await response.json();
  setUser({...data});
  }
  fetchData();
 }, [userId, count]); //when we pass userid component loaded. mt array that time component loaded that time only one call

return(
    <>
    <h2 classNameName='text-center'>This is user_effect example 2</h2>
    <div>count is {count}</div>
    <button onClick={() =>{
        setCount(count + 1);
        }}>
            Increment</button>
   <hr/>
   <button onClick={() => { 
        setUserId(userId + 1);
        }}>
            Increment user Id</button>
  
   

   <div className="card col-sm-3">
  <img width='100' height='100' className="card-img-top" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">card Title</h5>
    <h5 className="card-text">{user.name}</h5>
     <p className="card-text">{user.email}</p>
     {/* <p className="card-text">{user.address.city}</p> */}
     <p className="card-text">{userId}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
);

}
