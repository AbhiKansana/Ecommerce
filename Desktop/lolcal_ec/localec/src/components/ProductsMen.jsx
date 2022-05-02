import React, {useState, useEffect } from "react";
import { Select,Grid } from "./Styled";
import axios from 'axios'
import { ProductCard } from "./ProductCard";

export const ProductsMen = () => {

  const [products, setproducts] = useState([])
  const [selectVal, setselectVal] = useState("")


  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    axios.get(" https://movie-fake-server.herokuapp.com/products")
    .then(res => {
      let data = res.data
      setproducts(data)
      console.log(data)
    })

  }, []);

  
  const handleSort = (e) => {
    setselectVal(e.target.value)
    if(e.target.value==="asc"){
      setproducts([...products].sort((a,b)=>a.price-b.price))
    }
    else if(e.target.value==="desc"){
      setproducts([...products].sort((a,b)=>b.price-a.price))
    }
  };
  const arrnew = products.filter(item=>item.category==="men")
  const mapData = arrnew.map(item=>{
    return(
        <ProductCard key={item.id} item={item}/>
    )
  })

  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each Product card */}
        <div style={{
          display:"grid",
          gridTemplateColumns: " auto auto auto",
          marginLeft:"100px",
        }}>
        {mapData}
        </div>
      </Grid>
    </>
  );
};
