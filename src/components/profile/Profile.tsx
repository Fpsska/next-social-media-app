import Stack from '@mui/material/Stack';

import styled from '@emotion/styled';

import { CustomImage } from '@/shared';

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

export const Profile = ({ avatar, status = 'offline' }: Props) => {
  return (
    <Wrapper>
      <ImageContainer>
        <CustomImage
          image={avatar}
          width={100}
          height={100}
          alt="profile avatar"
          priority
        />
        <Badge>
          <Status status={status} />
        </Badge>
      </ImageContainer>
      <Name>Fpsska</Name>
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
  avatar: string;
  status?: StatusTypes;
};

type StatusTypes = 'online' | 'offline';

type StyledComponentProps = {
  status: StatusTypes;
};
