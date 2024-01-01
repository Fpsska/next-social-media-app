import Image, { StaticImageData } from 'next/image';

import AddIcon from '@mui/icons-material/Add';

import styled from '@emotion/styled';

import placeholder from '../../../../public/assets/images/user-placeholder-avatar.png';

// /. IMPORTS

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    div {
      transition: all 0.3s linear;
      border-color: #4b4a4f;
    }
    svg {
      fill: #4b4a4f;
      transition: all 0.3s linear;
    }
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Name = styled.span<StyledComponentProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.action === 'adding' ? '#4b4a4f' : '#fbfbfb')};
`;

const Button = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const ImageContainer = styled.div<StyledComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${(props) =>
    props.action === 'adding' ? '1.5px dashed #fbfbfb' : 'none'};
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.action === 'viewing' &&
    `&::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, darkblue, purple);
    z-index: -1;
  }`}
`;

const imageStyles = {
  borderRadius: '50%',
  maxWidth: '100%',
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '96%',
  height: '96%'
};

export const StoryTemplate = ({
  action = 'viewing',
  avatar = placeholder,
  name = 'user'
}: Props) => {
  return (
    <Template>
      <ImageContainer action={action}>
        <>
          {action === 'adding' ? (
            <Button>
              <AddIcon style={{ color: '#fbfbfb' }} />
            </Button>
          ) : (
            <Image src={avatar} style={imageStyles} alt="user avatar" />
          )}
        </>
      </ImageContainer>
      <Name action={action}>{action === 'adding' ? 'Add Story' : name}</Name>
    </Template>
  );
};

type Props = {
  action?: 'adding' | 'viewing';
  avatar?: StaticImageData;
  name: string;
};

type ActionTypes = 'adding' | 'viewing';

type StyledComponentProps = {
  action: ActionTypes;
};
