import { createGlobalStyle } from 'styled-components';

import { BRAND_PRIMARY } from './_colors.style';

export const GlobalCSS = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Code Pro', monospace;
    background: ${BRAND_PRIMARY};
  }
`;
