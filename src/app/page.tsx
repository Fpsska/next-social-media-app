'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { GlobalStyles } from './global.styles';

// /. IMPORTS

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Home = () => {
  return (
    <Main>
      <Global styles={GlobalStyles} />
      <Title>HELLO WORLD</Title>
    </Main>
  );
};

export default Home;