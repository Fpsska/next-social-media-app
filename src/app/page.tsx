'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { FriendTemplate } from '@/shared/components';
import { StoryTemplate } from '@/shared/components/storyTemplate';

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
      <FriendTemplate
        name="thomas lean"
        city="New York, United states"
        // action="adding"
      />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <StoryTemplate name="Elena" action="adding" />
        <StoryTemplate name="Neil" />
        <StoryTemplate name="Keran" />
      </div>
    </Main>
  );
};

export default Home;
