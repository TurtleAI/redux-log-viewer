import React from 'react';
import styled from 'styled-components';
import { BRAND_WHITE } from '../../settings/_colors.style';

export default function FallBackUI() {
  return (
    <FallBackUI.Wrapper>
      <FallBackUI.Content>
        <span>An error just occurred, please reload the page and try again.</span>
      </FallBackUI.Content>
    </FallBackUI.Wrapper>
  );
}

FallBackUI.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

FallBackUI.Content = styled.div`
  text-align: center;
  padding: 0 15%;

  span {
    margin: 0;
    color: ${BRAND_WHITE};
    display: block;
    width: 100%;
    font-size: 2rem;
  }
`;
