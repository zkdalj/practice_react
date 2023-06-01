import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const doSomethingAnsNavigate = function () {
    for (let i = 1; i <= 10000; i++) {
      console.log("i am doing something....");
    }
    navigate("/career");
  };
  return (
    <>
      <h1 className="text-center">this is ContactUs page</h1>
      <a href="/career">Go To Career</a> <br />
      <Link to="/career">Go To Career without loading</Link>
      <br/>
      <button onClick={doSomethingAnsNavigate}>
        Do something & then go to careers page
      </button>
      <br/>
      <button onClick={()=>navigate(-2)}>Go Back</button>
      <button onClick={()=>navigate(1)}>Go Next</button>

    </>
  );
} //but if you use this for go to pages is reloaded <a>
//javascrept formatter
