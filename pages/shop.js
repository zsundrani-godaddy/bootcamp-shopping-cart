import React from 'react';
import Head from '../components/head';
import Link from 'next/link'; //imports link 
import ShopItem from '../components/ShopItem'
import ShoppingItemList from '../components/ShopItemList';

import { Container, Typography } from '@mui/material'
const ex = [
    {name: 'testing1', description: 'testing descr.', image: 'https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg', price: '29.99'},
    {name: 'testing2', description: 'testing descr.', image: 'https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg', price: '29.99'},
    {name: 'testing3', description: 'testing descr.', image: 'https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg', price: '29.99'}
];

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography mx = 'auto' textAlign = 'center' variant="h3">My Shop</Typography>
    </div>
    <div>
      <ShoppingItemList items = {ex} />
      <Link href="/cart">View cart</Link>
    </div>
  </Container>
);

export default ShopPage;