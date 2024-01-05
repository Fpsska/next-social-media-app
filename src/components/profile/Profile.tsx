import Image from 'next/image';

import Stack from '@mui/material/Stack';

import styled from '@emotion/styled';

import placeholder from '../../../public/assets/images/user-placeholder-avatar.png';

// /. IMPORTS

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const imageStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  maxWidth: '100%',
  display: 'inline-block',
  verticalAlign: 'middle'
};

const Badge = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status = styled.span<StyledComponentProps>`
  background-color: ${({ status }) =>
    status === 'online' ? '#4bbc98' : '#4b4a4f'};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: 20px;
  text-align: center;
`;

const City = styled.span`
  font-size: 16px;
  position: relative;
  text-align: center;
  margin: 10px 0 15px 0;
`;

const Counter = styled.span`
  font-size: 20px;
`;

const Label = styled.span``;

export const Profile = ({ status = 'offline' }: Props) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={placeholder} style={imageStyles} alt="profile avatar" />
        <Badge>
          <Status status={status} />
        </Badge>
      </ImageContainer>
      <Name>Tim Cahjll</Name>
      <City>Terrance .CA United states</City>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" spacing={1} textAlign="center">
          <Counter>368</Counter>
          <Label>Post</Label>
        </Stack>
        <Stack direction="column" spacing={1} textAlign="center">
          <Counter>184.K</Counter>
          <Label>Followers</Label>
        </Stack>
        <Stack direction="column" spacing={1} textAlign="center">
          <Counter>6M</Counter>
          <Label>Followers</Label>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

type Props = {
  status: StatusTypes;
};

type StatusTypes = 'online' | 'offline';

type StyledComponentProps = {
  status: StatusTypes;
};
