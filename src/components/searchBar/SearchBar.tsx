import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, InputBase, Paper } from '@mui/material';

import styled from '@emotion/styled';

// /. IMPORTS

const Wrapper = styled(Paper)<any>`
  display: flex;
  align-items: center;
  background-color: #34303e;
`;

const Input = styled(InputBase)`
  flex: 1;
  background-color: #34303e;
  color: #fbfbfb;
  border-radius: 5px;
  padding: 10px 0;

  &::placeholder {
    color: #fbfbfb;
  }
`;

export const SearchBar = () => {
  return (
    <Wrapper component="form">
      <IconButton type="button" aria-label="search">
        <SearchOutlinedIcon style={{ color: '#fbfbfb' }} />
      </IconButton>
      <Input
        placeholder="Search"
        inputProps={{ 'aria-label': 'search content' }}
      />
      <IconButton aria-label="mic">
        <MicNoneOutlinedIcon style={{ color: '#fbfbfb' }} />
      </IconButton>
    </Wrapper>
  );
};
