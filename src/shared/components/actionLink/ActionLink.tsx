import Link from '@mui/material/Link';

import styled from '@emotion/styled';

// /. IMPORTS

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: #4e7bff;
`;

export const ActionLink = ({ children }: Props) => {
  return (
    <StyledLink href="#" underline="none">
      {children}
    </StyledLink>
  );
};

type Props = {
  children: string;
};
