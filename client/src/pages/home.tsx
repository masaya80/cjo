import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Spinner, useColorModeValue, Image, Center, Flex
} from "@chakra-ui/react";
import Skeleton from 'react-loading-skeleton'

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Home = () => {
  const auth = true;
  const { loadingGet, loadingPost, loadingError, posts, serverDataGet, serverDataPost } = usePostsData();
  const [count, setCount] = useState(0);

  useEffect(() => {
    serverDataGet();
  }, []);

  const loading = () => {
    if (loadingGet == true) {
      return (
        <Box as={Container} align={'center'}><Spinner color='blue' size='lg' /></Box>
      );
    }
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const companys = ["Mercari", "Mitsubishi", "Nissan", "Toyota", "Honda"];
  const categorys = ["Engineer", "Consulting", "Banker", "Sales", "Marketing"];

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'7xl'} margin={'auto'} >
          <VStack>
            <Box as={Link} bg='white' w='220px' top={'80px'} height={'250px'} rounded={'lg'} shadow='md' 
            textAlign={'center'} flexDir={'column'} borderBottom={0} mb={4} to={'/profile'} >
              <Avatar
                name="John Doe"
                size={'md'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
                mt={4}
                mb={'10px'}
              />
              <Heading textAlign='center' color={'black'} size='md'>
                Kai Mitsuzawa
              </Heading>
              <Text textAlign='center' color={'gray.500'} size='md'>
                Linkedin User
              </Text>
            </Box>
            <Box bg='white' w='220px' top={'80px'} height={'250px'} rounded={'lg'} shadow='md' textAlign={'center'} flexDir={'column'} borderBottom={0} mb={4} >
              <Heading as='h3' size='lg' color='black' textAlign='center'>
                Tips
              </Heading>
            </Box>
          </VStack>
          <Box as={Container} flexDir={'column'} maxW={'xl'} rounded={'md'}>
            {loadingGet ? loading() : companys.map(company => (
              <Box bg='white' shadow='md' p={4} mb={6} rounded='md' key={company} >
                <Link to={company}>
                  <HStack mb={2} spacing='25px'>
                    <Image
                      alt="メルカリ"
                      boxSize={'80px'}
                      src={
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.fashionsnap.com%2Fimage%2Fupload%2Fq_auto%2Cw_1088%2Fasset%2Farticle%2Fimages%2F2020%2F10%2Fmercarilogo20201030-000.jpg&f=1&nofb=1'
                      }
                    />
                    <Heading size='md' color='gray.700'>
                      {company}
                    </Heading>
                    <Heading size='md' color='gray.700'>
                      Category: {categorys[Math.floor(Math.random() * categorys.length)]}
                    </Heading>
                  </HStack>
                  <Text fontSize='lg' mb={2}>
                    メルペイのセキュリティを強固にしたい
                  </Text>
                  <Text fontSize='sm' noOfLines={2} >
                    クライアントが持つデータを集約せずに分散した状態で機械学習を行う方法として，2016年に提唱されたFederated Learningがあります．
                    Federated Learningは，サーバから配布されたグローバルモデルを使ってクライアントが自身の持つデータの勾配を計算し，サーバが勾配を集約すること(平均化など)で学習モデルを更新する方法です．
                  </Text>
                  {/* <Button colorScheme='red' variant='solid' size={'sm'} mt={2} onClick={handleClick}
                type="button">♥{count}</Button> */}
                  <Heading size='md' mt={3} color='gray.700' textAlign='end'>
                    300,000yen
                  </Heading>
                  <Text color='gray.400' fontSize='sm' align='start'>
                    2022/05/30
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
          <VStack>
            <Box w='220px' bg='white' shadow='md' rounded='md'>
              <Heading mt={2} as='h3' size='lg' color='gray.700' textAlign='center'>
                Category
              </Heading>
              <VStack mt={4} mb={5} alignItems='center'>
                {loadingGet ? loading() : categorys.map(category => (
                  <Button as={Link} size='md' color='gray.700' to={category}>
                    {category}
                  </Button>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </div >
  );
}