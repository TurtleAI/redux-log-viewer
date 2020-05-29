import React from 'react';
import styled from 'styled-components';

import ErrorBoundary from '../helpers/ErrorBoundary';
import Provider from '../helpers/Provider';
import { GlobalCSS } from '../settings/_global.style';

function App() {
  return (
    <App.Wrapper>
      <GlobalCSS />
      <ErrorBoundary>
        <Provider>
          <h1>Turtle devTools</h1>
        </Provider>
      </ErrorBoundary>
    </App.Wrapper>
  );
}

App.Wrapper = styled.div``;

export default App;
