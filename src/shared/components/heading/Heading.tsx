import styled from '@emotion/styled';

// /. IMPORTS

const Title = styled.h2<StyledComponentProps>`
  font-size: 16px;
  font-weight: 500;
  color: #fbfbfb;
  margin-bottom: ${(props) => props.indentBottom};
  margin-top: 0;
`;

export const Heading = ({ text, indentBottom = '0px' }: Props) => {
  return <Title indentBottom={indentBottom}>{text}</Title>;
};

type Props = {
  text: string;
  indentBottom?: string;
};

type StyledComponentProps = {
  indentBottom: string;
};
