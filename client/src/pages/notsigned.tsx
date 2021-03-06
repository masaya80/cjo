import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Heading, useColorModeValue
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';

export const NotSigned = () => {
  const auth = false;
  return (
    <div>
      <Header authState={auth} />
      <Box minH={'80vh'} bg={useColorModeValue('green.50', 'green.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Heading size={'4xl'}>
            Top Page
          </Heading>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}