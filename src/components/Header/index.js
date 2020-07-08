import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FileInput from '../UI/FileInput';
import DropDown from '../UI/DropDown';
import { LogsContext } from '../../Providers/LogsProvider';
import { NotificationContext } from '../../Providers/NotificationProvider';
import { BRAND_WHITE } from '../../settings/_colors.style';
import { validateLogFormat } from './utils';
import { NOTIFICATION_TYPES } from '../../utils/constants';
import { DEFAULT_FORMAT_TYPE, CUSTOM_FORMAT_TYPE, ACTION_STRING_MAP_FORMAT_TYPE } from '../../utils/constants';

const formatOptions = [DEFAULT_FORMAT_TYPE, ACTION_STRING_MAP_FORMAT_TYPE, CUSTOM_FORMAT_TYPE];

export default function Header({ handleFormatTypeChange }) {
  const [text, setText] = useState('Upload a file to browse logs from');
  const { actions, state } = useContext(LogsContext);
  const { actions: notificationActions } = useContext(NotificationContext);

  function handleFileChange({ target: { files } }) {
    const reader = new FileReader();
    reader.onload = function () {
      const logs = this.result.split('\n');
      const logActions = [];

      try {
        logs.forEach((log) => {
          if (log.length) {
            if (state.customRowHandler) {
              logActions.push(validateLogFormat(state.customRowHandler(log)));
            } else {
              logActions.push(validateLogFormat(JSON.parse(log)));
            }
          }
        });

        actions.resetLogs(logActions);
        files[0] && setText(files[0].name);
      } catch (error) {
        notificationActions.showNotification({
          type: NOTIFICATION_TYPES.ERROR,
          message: error.message,
          duration: 10000,
        });
      }
    };
    reader.readAsText(files[0]);
  }

  return (
    <Header.Wrapper>
      <Header.Text>
        Redux Log Viewer
      </Header.Text>
      <Header.InputWrapper>
        <DropDown onChange={handleFormatTypeChange(actions.setFileFormatType)} value={state.formatType} options={formatOptions} />
        <FileInput text={text} onChange={handleFileChange} />
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
  display: flex;
  flex-direction: column;
`;

Header.propTypes = {
  handleFormatTypeChange: PropTypes.func.isRequired,
};
