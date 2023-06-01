import React, { Suspense } from "react";
// import Products from '../listitems/Products'
import LifeCycleDemo from "../lifecycle/LifeCycleDemo";
import LifeCycleDemo2 from "../lifecycle/LifeCycleDemo2";
import UseEffectDemo from "../hook/UseEffectDemo";
import UseEffectDemo2 from "../hook/UseEffectDemo2";
import UseEffectDemo3 from "../hook/UseEffectDemo3";
import UseRefDemo1 from "../hook/UseRefDemo1";
import RefDemo from "../ref/RefDemo";
import RefDemo2 from "../ref/RefDemo2";
import RefDemo3 from "../ref/RefDemo3";
import RefDemo4 from "../ref/RefDemo4";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import RegistrationForm from "../form/assignment/RegistrationForm";
import Greet from "../props/Greet";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import EmployessCrud from "../employeesCrud/EmployessCrud";
import FormDemo4 from "../form/FormDemo4";
import HttpDemo1 from "../http/HttpDemo1";
import HttpDemo5 from "../http/HttpDemo5";
import HttpDemo6 from "../http/HttpDemo6";
import ClickcounterHoc from "../hoc s/ClickcounterHoc";
import HoverCounter from "../hoc s/HoverCounter";
import HoveHoc from "../hoc s/HoveHoc";
import { Route, Router, Routes } from "react-router-dom";
import ContactUs from "../routing/ContactUs";
import Career from "../routing/Career";
import AboutUs from "../routing/AboutUs";
import Home from "../routing/Home";
import NotFound from "../routing/NotFound";
import Header from "../header/Header";
import ProductsDetails from "../listitems/ProductsDetails"; // path param
import ProductsDetails2 from "../listitems/ProductsDetails2";  //query param
import ContractsJobs from "../routing/ContractsJobs";
import PermanentJobs from "../routing/PermanentJobs";
import Authenticate from "../routing/Authenticate";
// import Products from "../listitems/Products";
const Products = React.lazy(() => import("../listitems/Products"));

// import Menu from "../../../../project1/src/components/menubar/Menu";
// import Products from "../products/Products";

export default function Body() {
  return (
    <div>
      {/* <Products /> */}
      {/* <LifeCycleDemo /> */}
      {/* <LifeCycleDemo name="Rahul" /> */}
      {/* <LifeCycleDemo2 /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseEffectDemo2 /> */}
      {/* <UseEffectDemo3 /> */}
      {/* <UseRefDemo1 /> */}
      {/* <RefDemo /> */}
      {/* <RefDemo2 /> */}
      {/* <RefDemo3 /> */}
      {/* <RefDemo4 /> */}
      {/* <FormDemo1 /> */}
      {/* <FormDemo2 /> */}
      {/* <FormDemo3 /> */}
      {/* <RegistrationForm /> */}
      {/* <Greet name="dipti" msg="good morning" age="26" >
        <h3>thi is  content from body components</h3>
        <h3>thi is heading4</h3>

        </Greet>
      <Greet name="niraj" msg="good morning" age="25" /> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <EmployessCrud /> */}
      {/* <FormDemo4 /> */}
      {/* <HttpDemo1 /> */}
      {/* <HttpDemo5 /> */}
      {/* <HttpDemo6 /> */}
      {/* <ClickcounterHoc /> */}
      {/* ========================= */}
      {/* <HoverCounter /> */}
      {/* <HoveHoc /> */}
      {/* <Menu /> */}
      <Header />
      {/* <Products /> */}
      <Suspense fallback={<h1>Loading....</h1>}>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/career" element={<Career />}>
        <Route path="permanent" element={<PermanentJobs />} />
        <Route  path="contract" element={<ContractsJobs />} />
</Route>
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productsdetails/:id" element={<ProductsDetails />} />
        <Route exact path="/productsdetails2" element={<ProductsDetails2 />} />  
        <Route exact path="/products" element={<Authenticate><Products /></Authenticate>} />  
        <Route path="/" element={<NotFound />} />
        </Routes>
        </Suspense>

    </div>
  );
}
