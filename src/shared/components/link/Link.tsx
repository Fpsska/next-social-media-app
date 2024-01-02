import styled from '@emotion/styled';

// /. IMPORTS

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #4e7bff;
  margin-top: 0;
  cursor: pointer;
`;

export const Link = ({ text }: Props) => {
  return <StyledLink>{text}</StyledLink>;
};

type Props = {
  text: string;
};
