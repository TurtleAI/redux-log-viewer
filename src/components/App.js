import React from 'react';
import styled from 'styled-components';

import ErrorBoundary from '../helpers/ErrorBoundary';
import Provider from '../helpers/Provider';
import { GlobalCSS } from '../settings/_global.style';
import ActionPreview from './ActionPreview';
import ActionItemList from './ActionItemList';
import Header from './Header';

function App() {
  return (
    <>
      <GlobalCSS />
      <ErrorBoundary>
        <Provider>
          <App.Wrapper>
            <Header />
            <App.Body>
              <ActionItemList />
              <ActionPreview />
            </App.Body>
          </App.Wrapper>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

App.Wrapper = styled.div``;

App.Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 41.9886px);
`;

export default App;
