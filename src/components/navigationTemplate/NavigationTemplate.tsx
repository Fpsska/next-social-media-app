import styled from '@emotion/styled';

// /. IMPORTS

const Template = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

const Name = styled.span<StyledComponentProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isActive }) => (isActive ? '#4e7bff' : '#fbfbfb')};
`;

export const NavigationTemplate = ({ name, icon, isActive = false }: Props) => {
  return (
    <Template>
      <Link href="#">
        {icon}
        <Name isActive={isActive}>{name}</Name>
      </Link>
    </Template>
  );
};

type Props = {
  name: string;
  icon: React.JSX.Element;
  isActive?: boolean;
};

type StyledComponentProps = {
  isActive: boolean;
};
