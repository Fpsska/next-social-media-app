'use client';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Followers, Navigation, Profile, SearchBar, Tags } from '@/components';
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
        <FriendTemplate
          avatar="https://images.unsplash.com/photo-1616277239237-1c50214ffa78?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="thomas lean"
          city="New York, United states"
        />

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
        <StoryTemplate
          name="Neil"
          avatar="https://images.unsplash.com/photo-1616277239237-1c50214ffa78?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StoryTemplate name="Keran" />
      </div>

      <Divider />

      <SearchBar />

      <Divider />

      <Tags />

      <Divider />

      <Profile
        avatar="https://images.unsplash.com/photo-1616277239237-1c50214ffa78?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        status="online"
      />

      <Divider />

      <Followers />

      <Divider />

      <Navigation />
    </Main>
  );
};

export default Home;
