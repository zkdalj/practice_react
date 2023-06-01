import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductsDetails2() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({});

  
    useEffect(() => {
      const currentParams = Object.fromEntries([...searchParams]);
      setProduct(currentParams);
      console.log(currentParams); //get new value onchange
     }, [ searchParams ]);
    


  return (
  <>   
        <h1 className='text-center'>This is Products Details page </h1>
    <div className="row ">
              <div className="col-3">
                <div className=" category card">
                  <img src={product?.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Title:{product?.title}</p>
                    <p className="card-text">price :{product?.price}</p>
                  </div>
                </div>
              </div>
          </div>
    </>

  );
}
