import Image, { StaticImageData } from 'next/image';

import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import styled from '@emotion/styled';

import placeholder from '../../../../public/assets/images/user-placeholder-avatar.png';

// /. IMPORTS

const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fbfbfb;
  margin-bottom: 4px;
`;

const City = styled.span`
  font-size: 10px;
  font-weight: 100;
  color: #4b4a4f;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const imageStyle = {
  borderRadius: '50%',
  maxWidth: '100%',
  marginRight: '10px',
  display: 'inline-block',
  verticalAlign: 'middle'
};

type Props = {
  name: string;
  city: string;
  avatar?: StaticImageData;
};

export const FriendTemplate = ({ name, city, avatar = placeholder }: Props) => {
  return (
    <Template>
      <Wrapper>
        <Image
          src={avatar}
          width={50}
          height={50}
          style={imageStyle}
          alt="user avatar"
        />
        <InfoContainer>
          <Name>{name}</Name>
          <City>{city}</City>
        </InfoContainer>
      </Wrapper>

      <Button>
        <PersonAddOutlinedIcon style={{ color: '#4e7bff' }} />
      </Button>
    </Template>
  );
};
