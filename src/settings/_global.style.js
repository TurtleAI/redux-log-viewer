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
    font-weight: 300;
    background: ${BRAND_PRIMARY};
  }

  * {
    box-sizing: border-box;
  }

  .modal-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(1.5px);
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: opacity 2s ease-in-out;
    overflow-y: scroll;
    padding: 10vh 20vw;
  }
`;
