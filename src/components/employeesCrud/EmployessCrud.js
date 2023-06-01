import React, { Component } from 'react'

export default class EmployessCrud extends Component {
  render() {
    return (
      <div>EmployessCrud</div>
    )
  }
}



































// import React, { useState } from 'react'

// export default function EmployessCrud() {
 
// let submitHandler = (event) =>{
//     event.preventDefault ();
//     addEmployee(employee);
//     setEmployee(getDefault);
// };

// let getDefault = () =>{
//   return{
//     id: "",
//     fname: "",
//     lname: "",
//     gmail: " ",
//   }
// }
//   return (
//     <>
//      <from onSubmit={submitHandler}>
//     First Name:
//     <input name="fname" value={user.fname} onChange = {(e)=>setUser({...user,fname: e.target.value})}/>
    
//     Last Name:
//     <input name="lname" value={user.lname} onChange = {(e)=>setUser({...user,lname: e.target.value})}/>
    
//     Email Id:
//     <input name="email" value={user.email} onChange = {(e)=>setUser({...user,email: e.target.value})}/>

//  <br/>
//  <br/>
//  <br/>
//  state data: {user.fname+"---"+ user.lname+" ---"+user.email} <br/> <br/>
//  <button>submit</button>
 
//   </from>
//     <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">Id</th>
//         <th scope="col">First Name</th>
//         <th scope="col">Last Name</th>
//         <th scope="col">Email</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>{user.fname}</td>
//         <td>{user.lname}</td>
//         <td>{user.email}</td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td>Larry the Bird</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </table>
//   </>
//   )
// }





