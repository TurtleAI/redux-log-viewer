import React from 'react';
import styled from 'styled-components';

import ErrorBoundary from '../helpers/ErrorBoundary';
import Provider from '../helpers/Provider';
import { GlobalCSS } from '../settings/_global.style';
import ActionItem from './ActionItem';

function App() {
  return (
    <App.Wrapper>
      <GlobalCSS />
      <ErrorBoundary>
        <Provider>
          <>
          <br />
          <ActionItem action="LOG_OUT_USER_LOL" time="00.00.23" />
          </>
        </Provider>
      </ErrorBoundary>
    </App.Wrapper>
  );
}

App.Wrapper = styled.div``;

export default App;
