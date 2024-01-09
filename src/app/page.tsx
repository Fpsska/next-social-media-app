'use client';

import { Grid, Stack } from '@mui/material';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Followers, Navigation, Profile, SearchBar, Tags } from '@/components';
import {
  ActionLink,
  Divider,
  FriendTemplate,
  Heading,
  StoryTemplate
} from '@/shared/components';

import { GlobalStyles } from './global.styles';

// /. IMPORTS

const Wrapper = styled.main`
  padding: 20px 10px 20px 20px;
  min-height: 100vh;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const StoriesList = styled.ul`
  display: flex;
  margin: 15px 0;
`;

const StyledActionLink = styled(ActionLink)`
  text-align: center;
`;

const SectionTop = styled(Stack)`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Wrapper>
      <Global styles={GlobalStyles} />

      <Grid container>
        <Grid item xs={3} pl="10px">
          <Profile
            avatar="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            status="online"
          />
          <Divider />
          <Navigation />
          <Divider />
          <Stack>
            <Heading>Contacts</Heading>
            <List>
              <FriendTemplate
                name="Jacob Hill"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Thomas lean"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Rebort Walker"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Helene Engels"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Bonne Garcia"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Karan Mauro"
                city="New York, United states"
                action="messaging"
                avatar="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </List>
            <StyledActionLink>View All</StyledActionLink>
          </Stack>
        </Grid>
        <Grid item xs={6} pl="40px" pr="40px">
          <SearchBar />
          <SectionTop>
            <Heading>Stories</Heading>
            <StyledActionLink>Watch All</StyledActionLink>
          </SectionTop>
          <StoriesList>
            {/* REMOVE ABILITY TO USE NAME WITH ADDING ACTION */}
            <StoryTemplate name="Elena" action="adding" />
            <StoryTemplate
              name="Elena"
              avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Neil"
              avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Keran"
              avatar="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Joseph"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Bonne"
              avatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Helena"
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Thomes"
              avatar="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <StoryTemplate
              name="Jacob"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </StoriesList>
          <SectionTop>
            <Heading>Feeds</Heading>
            <ActionLink>Watch All</ActionLink>
          </SectionTop>
        </Grid>
        <Grid item xs={3}>
          <Heading>Friend Requests</Heading>
          <List>
            <FriendTemplate
              name="Leon Harris"
              city="New York, United states"
              action="requesting"
              avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <FriendTemplate
              name="Amanda Gray"
              city="New York, United states"
              action="requesting"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </List>
          <Divider />
          <Stack>
            <Heading>Friend Suggestion</Heading>
            <List>
              <FriendTemplate
                name="Kristi Nillon"
                city="New York, United states"
                action="adding"
                avatar="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Andrey Brown"
                city="New York, United states"
                action="adding"
                avatar="https://images.unsplash.com/photo-1641260774125-04d527b376a5?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Elizabeth Wilson"
                city="New York, United states"
                action="adding"
                avatar="https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FriendTemplate
                name="Fiona Anderson"
                city="New York, United states"
                action="adding"
                avatar="https://images.unsplash.com/photo-1488716820095-cbe80883c496?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </List>
            <StyledActionLink>View All</StyledActionLink>
          </Stack>
          <Divider />
          <Followers />
          <Divider />
          <Tags />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;
