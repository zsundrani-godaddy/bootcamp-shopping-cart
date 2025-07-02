import React, { useState, useEffect } from 'react';
import { Grid, Item } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from '../components/ShopItem'

function ShoppingItemList({items}) {

  // this is the state we will use to hold the response from the api
  const [products, setProducts] = useState([]);
  const router = useRouter()

  useEffect(() => {
    /* fetch list of products here */
    /* update product state with response */
    async() => {
        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();
        setProducts(data);
    }
  }, [])

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
    const request = new Request("http://localhost:8000/v1/cartitems", {
    method: "POST",
    body: JSON.stringify({ product }), headers: { 'content-type': 'application/json' }});
    
    await fetch(request);
    router.push('/cart')
  }

  return (
    <Grid container direction="row" spacing={2}>
        {items.map((item) => <Grid item>
        <ShopItem name = {item.name}
       description = {item.description}
       image = {item.image}
       price = {item.price}
       onAddToCart={handleAddToCart} /> </Grid>)}
    </Grid>
  )
}

export default ShoppingItemList