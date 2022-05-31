import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Spinner, useColorModeValue, Image, Flex, Wrap
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Project = () => {
  const auth = true;

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('green.50', 'green.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box w='70%' top={'80px'} height={'300px'} bg='white' rounded={'lg'} textAlign={'center'} flexDir={'column'}
            borderBottom={0} mb={4} border={'2px'} borderColor={'gray.100'} >
            <Heading size='lg' mt={2}>
              メルペイのセキュリティを強固にしたい
            </Heading>
          </Box>
          <Box w='25%' height={'220px'} bg='white' rounded={'md'} border={'2px'} borderColor={'gray.100'} >
            <Heading mt={2} as='h3' size='md' color='black' textAlign='center'>
              もしかして知り合い？
            </Heading>
          </Box>
        </Box>
        <Box pt={2} px={4} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box w='70%' top={'80px'} height={'220px'} bg='white' rounded={'lg'} textAlign={'center'} flexDir={'column'}
            borderBottom={0} mb={4} border={'2px'} borderColor={'gray.100'} >
            <HStack mt={4} ml={4}>
              <Heading textAlign='center' color={'black'} size='md'>
                当サービス上での履歴
              </Heading>
            </HStack>
            <HStack mt={4} ml={4}>
              <Image
                alt="メルカリ"
                boxSize={'60px'}
                src={
                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.fashionsnap.com%2Fimage%2Fupload%2Fq_auto%2Cw_1088%2Fasset%2Farticle%2Fimages%2F2020%2F10%2Fmercarilogo20201030-000.jpg&f=1&nofb=1'
                }
              />
              <Heading size='md' color='gray.700'>
                メルカリ
              </Heading>
            </HStack>
          </Box>
        </Box>
        <Box pt={2} px={4} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box w='70%' top={'80px'} height={'220px'} bg='white' rounded={'lg'} textAlign={'center'} flexDir={'column'}
            borderBottom={0} mb={4} border={'2px'} borderColor={'gray.100'} >
            <HStack mt={4} ml={4}>
              <Heading textAlign='center' color={'black'} size='md'>
                職歴
              </Heading>
            </HStack>
            <HStack mt={4} ml={4}>
              <Image
                alt="メルカリ"
                boxSize={'60px'}
                src={
                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.fashionsnap.com%2Fimage%2Fupload%2Fq_auto%2Cw_1088%2Fasset%2Farticle%2Fimages%2F2020%2F10%2Fmercarilogo20201030-000.jpg&f=1&nofb=1'
                }
              />
              <Heading size='md' color='gray.700'>
                メルカリ
              </Heading>
            </HStack>
          </Box>
        </Box>
        <Box pt={2} px={4} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box w='70%' top={'80px'} height={'220px'} bg='white' rounded={'lg'} textAlign={'center'} flexDir={'column'}
            borderBottom={0} mb={4} border={'2px'} borderColor={'gray.100'} >
            <HStack mt={4} ml={4}>
              <Heading textAlign='center' color={'black'} size='md'>
                学歴
              </Heading>
            </HStack>
            <HStack mt={4} ml={4} >
              <Image
                alt="メルカリ"
                boxSize={'60px'}
                src={
                  'https://i.pinimg.com/736x/2c/6b/c3/2c6bc38c935396db53480783c1ef8041.jpg'
                }
              />
              <Heading size='sm' color='black'>
                慶應義塾大学
              </Heading>
              <Text size='md' color='black'>
                メルカリ
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div >
  );
}