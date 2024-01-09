import { css } from '@emotion/react';

import { normalize } from 'styled-normalize';

export const GlobalStyles = css`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-size: 14px;
    color: #fbfbfb;
    background: #130f1f;
    margin: 0;
  }
`;
