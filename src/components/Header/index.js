import React from 'react';
import styled from 'styled-components';

import FileInput from '../UI/FileInput';
import { BRAND_WHITE } from '../../settings/_colors.style';

export default function Header() {
  return (
    <Header.Wrapper>
      <Header.Text>
        Turtle DevTools
      </Header.Text>
      <Header.InputWrapper>
        <FileInput />
      </Header.InputWrapper>
    </Header.Wrapper>
  );
}

Header.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${BRAND_WHITE};
  font-weight: 400;
`;

Header.Text = styled.span`
  color: ${BRAND_WHITE};
  font-weight: 400;
  padding-left: 14px;
`;

Header.InputWrapper = styled.span`
  width: 60%;
`;
