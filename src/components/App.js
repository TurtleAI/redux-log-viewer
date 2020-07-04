import React, { useState } from 'react';
import styled from 'styled-components';

import ErrorBoundary from '../helpers/ErrorBoundary';
import LogsProvider from '../Providers/LogsProvider';
import NotificationProvider from '../Providers/NotificationProvider';
import { GlobalCSS } from '../settings/_global.style';
import ActionPreview from './ActionPreview';
import ActionItemList from './ActionItemList';
import Header from './Header';
import Notification from './Notification';
import Modal from '../helpers/Modal';
import CustomRowHandler from './CustomRowHandler';
import { CUSTOM_FORMAT_TYPE } from '../utils/constants';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleFormatTypeChange(callback) {
    return function formatTypeHandler({ target: { value } }) {
      if (value === CUSTOM_FORMAT_TYPE.value) setIsModalOpen(true);
      callback(value);
    }
  }

  return (
    <>
      <GlobalCSS />
      <ErrorBoundary>
        <NotificationProvider>
          <Notification />
          <LogsProvider>
            <Modal isModalOpen={isModalOpen}>
              <CustomRowHandler handleCancelClick={() => setIsModalOpen(false)} />
            </Modal>
            <App.Wrapper>
              <Header handleFormatTypeChange={handleFormatTypeChange} />
              <App.Body>
                <ActionItemList />
                <ActionPreview />
              </App.Body>
            </App.Wrapper>
          </LogsProvider>
        </NotificationProvider>
      </ErrorBoundary>
    </>
  );
}

App.Wrapper = styled.div``;

App.Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 83px);
`;

export default App;
