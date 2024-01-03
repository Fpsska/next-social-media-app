import Image, { StaticImageData } from 'next/image';

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import placeholder from '../../../../public/assets/images/user-placeholder-avatar.png';

// /. IMPORTS

const Template = styled.div<StyledComponentProps>`
  display: ${({ action }) => action !== 'requesting' && 'flex'};
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Wrapper = styled.div<StyledComponentProps>`
  display: flex;
  align-items: ${({ action }) =>
    action === 'requesting' ? 'flex-start' : 'center'};
  margin-right: ${({ action }) => action !== 'requesting' && '40px;'};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #fbfbfb;
  margin-bottom: 5px;
`;

const City = styled.span`
  font-size: 16px;
  font-weight: 100;
  color: #4b4a4f;
`;

const baseButtonStyles = css`
  font-size: 14px;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${baseButtonStyles}
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const ButtonAccept = styled.button`
  ${baseButtonStyles}
  color: #3956c6;
  margin-right: 15px;

  &:hover {
    color: green;
  }
`;

const ButtonDecline = styled.button`
  ${baseButtonStyles}
  color: #fbfbfb;

  &:hover {
    color: red;
  }
`;

const imageStyles = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  maxWidth: '100%',
  marginRight: '10px',
  display: 'inline-block',
  verticalAlign: 'middle'
};

export const FriendTemplate = ({
  name,
  city,
  avatar = placeholder,
  action = 'requesting'
}: Props) => {
  return (
    <Template action={action}>
      <Wrapper action={action}>
        <Image src={avatar} style={imageStyles} alt="user avatar" />
        <InfoContainer>
          <Name>{name}</Name>
          <City>{city}</City>

          <>
            {action === 'requesting' && (
              <ButtonContainer>
                <ButtonAccept>Accept</ButtonAccept>
                <ButtonDecline>Decline</ButtonDecline>
              </ButtonContainer>
            )}
          </>
        </InfoContainer>
      </Wrapper>

      <>
        {action === 'messaging' && (
          <Button>
            <MessageOutlinedIcon style={{ color: '#4e7bff' }} />
          </Button>
        )}
      </>

      <>
        {action === 'adding' && (
          <Button>
            <PersonAddOutlinedIcon style={{ color: '#4e7bff' }} />
          </Button>
        )}
      </>
    </Template>
  );
};

type Props = {
  name: string;
  city: string;
  avatar?: StaticImageData;
  action?: ActionTypes;
};

type ActionTypes = 'requesting' | 'messaging' | 'adding';

type StyledComponentProps = {
  action: ActionTypes;
};
