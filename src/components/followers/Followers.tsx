import Image from 'next/image';

import { Stack } from '@mui/material';

import styled from '@emotion/styled';

// /. IMPORTS

const Wrapper = styled.div`
  padding: 20px;
  background-color: #0f0d15;
  border-radius: 6px;
`;

const ImageGroup = styled.ul`
  display: flex;
`;

const imageStyles = {
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  maxWidth: '100%',
  display: 'inline-block',
  verticalAlign: 'middle',
  objectFit: 'cover'
};

const ImageContainer = styled.li<StyledComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fbfbfb;
  width: 55px;
  height: 55px;
  overflow: hidden;
  background-color: ${({ type }) => type === 'empty' && '#171525'};
  font-size: 20px;
  margin-left: -10px;

  :first-child {
    margin-left: 0;
  }
`;

const Counter = styled.span`
  font-size: 20px;
`;

const Label = styled.span`
  color: #4b4a4f;
`;

const Text = styled.span`
  font-size: 18px;
`;

export const Followers = () => {
  return (
    <Wrapper>
      <ImageGroup>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1569516449771-41c89ee14ca3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={55}
            height={55}
            style={imageStyles}
            alt="profile avatar"
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1616277240703-53735be020fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={55}
            height={55}
            style={imageStyles}
            alt="profile avatar"
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={55}
            height={55}
            style={imageStyles}
            alt="profile avatar"
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1584023830708-ff4f13335d32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={55}
            height={55}
            style={imageStyles}
            alt="profile avatar"
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1622023346627-b7d48c4484a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={55}
            height={55}
            style={imageStyles}
            alt="profile avatar"
          />
        </ImageContainer>
        <ImageContainer type="empty">+20</ImageContainer>
      </ImageGroup>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        mb={2}
        display="flex"
        alignItems="center"
      >
        <Counter>184.K</Counter>
        <Label>Followers</Label>
      </Stack>
      <Text>Watch Your followers Update</Text>
    </Wrapper>
  );
};

type TemplateTypes = 'filled' | 'empty';

type StyledComponentProps = {
  type?: TemplateTypes;
};
