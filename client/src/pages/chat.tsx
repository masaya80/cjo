import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Spinner, useColorModeValue, Image
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Chat = () => {
  const auth = true;
  const { loadingGet, loadingPost, loadingError, posts, serverDataGet, serverDataPost } = usePostsData();
  const [text, setText] = useState('');

  const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const inputText = e.currentTarget.value;
    setText(inputText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    serverDataPost(text);
    setText('');
  };

  return (
    <div>
      <Header authState={auth} />
      <Box minH={'85vh'} bg={useColorModeValue('green.50', 'green.800')}>
        <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'6xl'} margin={'auto'} >
          <Box as='form' bg={'white'} shadow='md' rounded={'md'} mb={8} onSubmit={handleSubmit} >
            <Textarea
              id="textarea"
              onChange={handleInputChange}
              value={text}
              placeholder='投稿を入力してください'
              size='md'
              mt={4}
            />
            <Button mt={4} mb={2} colorScheme='teal' variant='solid'
              isLoading={loadingPost} type="submit">投稿</Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div >
  );
}