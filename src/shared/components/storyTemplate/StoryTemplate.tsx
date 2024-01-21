'use client';

import React from 'react';

import AddIcon from '@mui/icons-material/Add';

import styled from '@emotion/styled';

import { CustomImage, StrictUnion } from '@/shared';

// /. IMPORTS

const Template = styled.li`
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
  color: ${({ action }) => (action === 'adding' ? '#4b4a4f' : '#fbfbfb')};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: ${({ action }) =>
    action === 'adding' ? '1.5px dashed #fbfbfb' : 'none'};
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
  overflow: hidden;
  position: relative;

  ${({ action }) =>
    action === 'viewing' &&
    `&::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, darkblue, purple);
    z-index: -1;
  }`}
`;

export const StoryTemplate: React.FC<
  StrictUnion<AddingTemplate | ViewingTemplate>
> = (props) => {
  const { action = 'viewing', avatar, name = 'user' } = props;

  return (
    <Template>
      <ImageContainer action={action}>
        <>
          {action === 'adding' ? (
            <Button>
              <AddIcon style={{ color: '#fbfbfb' }} />
            </Button>
          ) : (
            <CustomImage
              image={avatar as string}
              width={70}
              height={70}
              alt="user avatar"
            />
          )}
        </>
      </ImageContainer>
      <Name action={action}>{action === 'adding' ? 'Add Story' : name}</Name>
    </Template>
  );
};

type AddingTemplate = {
  action: Extract<ActionTypes, 'adding'>;
};

type ViewingTemplate = {
  avatar: string;
  name: string;
};

type ActionTypes = 'adding' | 'viewing';

type StyledComponentProps = {
  action: ActionTypes;
};
