import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Career() {
  return (
    <> 
      <h1 className='text-center'>this is Career page</h1>
      <h3 className='text-center'>This is the common area for both the job stypes</h3>
      <hr/>
<div className='text-center m-2'>
      <Link to="permanent">Parmanent Jobs</Link>
      <Link to="contract">Contract Jobs</Link>
      <h1>shufhskfdh</h1>
      </div>
      <Outlet></Outlet>
      
      </>
  
  );
}
