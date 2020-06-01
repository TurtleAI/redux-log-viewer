import React, { useContext } from 'react';
import styled from 'styled-components';

import FileInput from '../UI/FileInput';
import { LogsContext } from '../../helpers/Provider';
import { BRAND_WHITE } from '../../settings/_colors.style';

export default function Header() {
  const { actions, state } = useContext(LogsContext);

  return (
    <Header.Wrapper>
      <Header.Text>
        Turtle DevTools
      </Header.Text>
      <Header.InputWrapper>
        <FileInput onChange={actions.resetLogs} />
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
