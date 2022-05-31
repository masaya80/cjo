import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Heading, useColorModeValue
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';


export const Notfound = () => {
  const auth = true;

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('green.50', 'green.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
         <Heading size={'4xl'}>
           Sorry... Not Found 404
         </Heading>
        </Box>
      </Box>
      <Footer />
    </div >
  );
}