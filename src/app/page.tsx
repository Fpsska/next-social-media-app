'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Navigation, SearchBar } from '@/components';
import {
  ActionLink,
  Divider,
  FriendTemplate,
  Heading
} from '@/shared/components';
import { StoryTemplate } from '@/shared/components/storyTemplate';

import { GlobalStyles } from './global.styles';

// /. IMPORTS

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Main>
      <Global styles={GlobalStyles} />

      <Heading indentBottom="20px">Contacts</Heading>
      <ActionLink>Watch All</ActionLink>

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

      <Heading indentBottom="20px">Stories</Heading>

      <div style={{ display: 'flex' }}>
        <StoryTemplate name="Elena" action="adding" />
        <StoryTemplate name="Neil" />
        <StoryTemplate name="Keran" />
      </div>

      <Divider />

      <SearchBar />

      <Navigation />
    </Main>
  );
};

export default Home;
