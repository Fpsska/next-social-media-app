'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { FriendTemplate, Heading, Link } from '@/shared/components';
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

      <Heading text="Contacts" indentBottom="20px" />
      <Link text="Watch All" />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FriendTemplate name="thomas lean" city="New York, United states" />

        <FriendTemplate
          name="thomas lean"
          city="New York, United states"
          action="adding"
        />

        <FriendTemplate
          name="thomas lean"
          city="New York, United states"
          action="messaging"
        />
      </div>

      <Heading text="Stories" indentBottom="20px" />

      <div style={{ display: 'flex' }}>
        <StoryTemplate name="Elena" action="adding" />
        <StoryTemplate name="Neil" />
        <StoryTemplate name="Keran" />
      </div>
    </Main>
  );
};

export default Home;
