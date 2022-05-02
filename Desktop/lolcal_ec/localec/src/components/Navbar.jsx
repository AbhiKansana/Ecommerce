
import React from 'react'
import {Route,Routes,Link}  from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link style={{marginRight:40}} to='/' >Home</Link>
      <Link style={{marginRight:40}} to='/about' >About</Link>
      <Link style={{marginRight:40}} to='/products' >Products</Link>
      <Link style={{marginRight:40}} to='/products/men' >Men</Link>
      <Link style={{marginRight:40}} to='/products/women' >Women</Link>
     <Link  style={{marginRight:40}}to='/products/kids' >Kids</Link>
     <Link  style={{marginRight:40}}to='/products/homedecor' >Home Decor</Link>


    </nav>
  );
};
