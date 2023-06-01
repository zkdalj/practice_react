
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetails() {
  const [product, setProduct] = useState({});

    const  { id } = useParams();
  
    const getDetails = async function () {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
     };
    useEffect(() => {
      getDetails();
     },[ id ]);
    


  return (
  <>   
  
        <h1 className='text-center'>This is Products Details page </h1>
    
    <div className="row ">
              <div className="col-3">
                <div className=" category card">
                  <img src={product?.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product?.price}</h5>
                    <p className="card-text">{product?.category}</p>
                    <p className="card-text">{product?.title}</p>
                  </div>
                </div>
              </div>
          </div>
    </>

  );
}
