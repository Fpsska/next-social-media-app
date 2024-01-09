import Link from '@mui/material/Link';

import styled from '@emotion/styled';

// /. IMPORTS

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: #4e7bff;
`;

export const ActionLink = ({ className, children }: Props) => {
  return (
    <StyledLink className={className} href="#" underline="none">
      {children}
    </StyledLink>
  );
};

type Props = {
  className?: string;
  children: string;
};
