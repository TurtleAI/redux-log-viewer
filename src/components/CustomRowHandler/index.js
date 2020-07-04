import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LogsContext } from '../../Providers/LogsProvider';
import { NotificationContext } from '../../Providers/NotificationProvider';
import { BRAND_ACCENT, BRAND_PRIMARY, BRAND_WHITE, CRIMSON } from '../../settings/_colors.style';
import CodeEditor from '../UI/CodeEditor';
import Button from '../UI/Button';
import { parseFunction, validateFunctionString } from './utils';
import { NOTIFICATION_TYPES } from '../../utils/constants';

export default function CustomRowHandler({ handleCancelClick }) {
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { actions } = useContext(LogsContext);
  const { actions: notificationActions } = useContext(NotificationContext);

  function handleProceedClick() {
    try {
      setErrorMessage('');
      const rowHandler = parseFunction(validateFunctionString(text));
      actions.setCustomRowHandler(rowHandler);
      notificationActions.showNotification({
        type: NOTIFICATION_TYPES.SUCCESS,
        message: 'Custom function parsed successfully, now select a file format.',
        duration: 5000,
      });
      handleCancelClick();
    } catch (error) {
      setErrorMessage('Unable to parse function, please review function and try again.');
    }
  }

  return (
    <CustomRowHandler.Wrapper>
      <CustomRowHandler.Header>
        <CustomRowHandler.HeaderText>Enter a custom formatter to transform your log</CustomRowHandler.HeaderText>
      </CustomRowHandler.Header>
      <CustomRowHandler.Body>
        <CodeEditor onChange={setText} value={text} />
        <CustomRowHandler.Footer>
          <CustomRowHandler.ErrorMessage>
            {errorMessage && errorMessage}
          </CustomRowHandler.ErrorMessage>
          <CustomRowHandler.ButtonsWrapper>
            <Button onClick={handleCancelClick}>Cancel</Button>
            <Button isActive onClick={handleProceedClick}>Proceed</Button>
          </CustomRowHandler.ButtonsWrapper>
        </CustomRowHandler.Footer>
      </CustomRowHandler.Body>
    </CustomRowHandler.Wrapper>
  );
}

CustomRowHandler.Wrapper = styled.div`
  width: 100%;
  background: ${BRAND_PRIMARY};
  padding: 0 14px;
  border-color: ${BRAND_ACCENT};
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
`;

CustomRowHandler.Header = styled.div`
  width: 100%;
`;

CustomRowHandler.HeaderText = styled.h3`
  color: ${BRAND_WHITE};
  font-weight: 400;
`;

CustomRowHandler.Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

CustomRowHandler.Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

CustomRowHandler.ErrorMessage = styled.span`
  font-size: 14px;
  color: ${CRIMSON};
  font-weight: 900;
`;

CustomRowHandler.ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  margin-bottom: 14px;
`;

CustomRowHandler.propTypes = {
  handleCancelClick: PropTypes.func.isRequired,
};
