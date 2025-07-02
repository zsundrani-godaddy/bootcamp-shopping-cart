import React from 'react';
import Head from '../components/head';

import { Container, Typography } from '@mui/material'

export const cartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3">My Cart</Typography>
    </div>
  </Container>
);

export default cartPage;