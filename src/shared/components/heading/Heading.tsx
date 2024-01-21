'use client';

import { Typography } from '@mui/material';

import styled from '@emotion/styled';

// /. IMPORTS

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: #fbfbfb;
  margin: 0;
`;

export const Heading = ({ children }: Props) => {
  return <Title variant="h2">{children}</Title>;
};

type Props = {
  children: string;
};
