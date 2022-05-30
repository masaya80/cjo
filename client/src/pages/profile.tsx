import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Spinner, useColorModeValue, Image
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Profile = () => {
  const auth = true;

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box w='70%' top={'80px'} height={'220px'} bg='blue.100' rounded={'lg'} textAlign={'center'} flexDir={'column'} borderBottom={0} mb={4} >
            <HStack>
              <Avatar
                name="John Doe"
                size={'xl'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
                mt={2}
                mb={'10px'}
              />
              <Heading textAlign='center' color={'black'} size='md'>
                John Doe
              </Heading>
              <Heading textAlign='center' color={'black'} size='md'>
                Linkedin User
              </Heading>
            </HStack>
          </Box>
          <Box w='25%' height={'220px'} bg='blue.500' rounded={'md'} >
            <Heading as='h3' size='md' color='white' textAlign='center'>
              もしかして知り合い？
            </Heading>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div >
  );
}