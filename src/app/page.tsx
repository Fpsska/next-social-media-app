'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Navigation, Profile, SearchBar, Tags } from '@/components';
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

      <Heading>Contacts</Heading>
      <ActionLink>Watch All</ActionLink>

      <Divider />

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

      <Divider />

      <div style={{ display: 'flex' }}>
        <StoryTemplate name="Elena" action="adding" />
        <StoryTemplate name="Neil" />
        <StoryTemplate name="Keran" />
      </div>

      <Divider />

      <SearchBar />

      <Divider />

      <Tags />

      <Divider />

      <Profile status="online" />

      <Divider />

      <Navigation />
    </Main>
  );
};

export default Home;
