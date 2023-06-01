import React from 'react';
import { Navigate } from "react-router-dom";

export default function Authenticate({ props }) {
  // const role = localStorage.getItem('role');
  const role = "student";
  if (role === "student"){
    alert("you are not allowed to go to this route");
  return <Navigate to="/home" replace />;
  }

  return props.children;
}