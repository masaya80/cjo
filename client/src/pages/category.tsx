import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Spinner, useColorModeValue, Image, Flex, Wrap
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Categorys = () => {
  const auth = true;

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('green.50', 'green.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
         
        </Box>
      </Box>
      <Footer />
    </div >
  );
}