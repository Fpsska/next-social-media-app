import { Typography } from '@mui/material';

import styled from '@emotion/styled';

// /. IMPORTS

const Title = styled(Typography)<StyledComponentProps>`
  font-size: 16px;
  font-weight: 500;
  color: #fbfbfb;
  margin-bottom: ${({ indentBottom }) => indentBottom};
  margin-top: 0;
`;

export const Heading = ({ text, indentBottom = '0px' }: Props) => {
  return (
    <Title variant="h2" indentBottom={indentBottom}>
      {text}
    </Title>
  );
};

type Props = {
  text: string;
  indentBottom?: string;
};

type StyledComponentProps = {
  indentBottom: string;
};
