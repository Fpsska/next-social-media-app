import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

// /. IMPORTS

const Form = styled.form`
  position: relative;
  margin: 50px 0;
`;

const Input = styled.input`
  width: 100%;
  background-color: #34303e;
  color: #fbfbfb;
  border-radius: 5px;
  padding: 10px 40px 10px 50px;
  border: none;
  outline: transparent;

  &::placeholder {
    color: #fbfbfb;
  }
`;

const baseButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
`;

const ButtonSearch = styled.button`
  ${baseButtonStyles}
  left: 0;
  margin-left: 10px;
`;

const ButtonMic = styled.button`
  ${baseButtonStyles};
  right: 0;
  margin-right: 10px;
`;

export const SearchBar = () => {
  return (
    <Form action="#">
      <Input type="text" placeholder="Search" />
      <ButtonSearch type="submit" onClick={(e) => e.preventDefault()}>
        <SearchOutlinedIcon style={{ color: '#fbfbfb' }} />
      </ButtonSearch>

      <ButtonMic type="button" onClick={() => {}}>
        <MicNoneOutlinedIcon style={{ color: '#fbfbfb' }} />
      </ButtonMic>
    </Form>
  );
};
