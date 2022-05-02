import React from "react";
import {Route,Routes,Link}  from 'react-router-dom'
import Home from "../components/Home";
import About from "../components/About";
import { Products } from "../components/Products";
import { ProductsMen } from "../components/ProductsMen";


const MainRoutes = () => {
  return <>
   <Routes>
   <Route  path="/" element={<Home/>}/>
   <Route  path="/about" element={<About/>}/>
   <Route  path="/products" element={<Products/>}/>
   <Route  path="/products/men" element={<ProductsMen/>}/>
   </Routes>
  
  
      </>;
};
export { MainRoutes };
