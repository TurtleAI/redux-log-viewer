import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BRAND_WHITE, DIM_GRAY, BRAND_SECONDARY } from '../../../settings/_colors.style';
import { NOTIFICATION_TYPES } from '../../../utils/constants';


export default function SnackBar(props) {
  const { type, message } = props;
  const notificationIcon = {
    [NOTIFICATION_TYPES.SUCCESS]: '✅',
    [NOTIFICATION_TYPES.ERROR]: '❌',
    [NOTIFICATION_TYPES.WARNING]: '⚠️',
    [NOTIFICATION_TYPES.INFO]: '❕'
  };

  return (
    <SnackBar.Wrapper>
      <SnackBar.IconWrapper>
        {notificationIcon[type]}
      </SnackBar.IconWrapper>
      <SnackBar.TextWrapper>{message}</SnackBar.TextWrapper>
    </SnackBar.Wrapper>
  );
}

SnackBar.Wrapper = styled.span`
  width: 300px;
  display: flex;
  align-items: center;
  padding: 19.2px;
  border-radius: 3px;
  background: ${BRAND_WHITE};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  color: ${BRAND_WHITE};
  font-weight: 600;
  background-color: ${BRAND_SECONDARY};
  border: 1px solid ${DIM_GRAY};
  bottom: 32px;
  opacity: 1;
  z-index: 3;
  transition: opacity 150ms ease-in;
  -webkit-transition: opacity 150ms ease-in;
  animation: slidein 1500ms ease-in-out forwards;
  -webkit-animation: slidein 1500ms ease-in-out forwards;
  
  @keyframes slidein {
    from {
      right: -320px;
    }
    to {
      right: 32px;
    }
  }
`;

SnackBar.IconWrapper = styled.span`
  margin-right: 12.8px;
`;

SnackBar.TextWrapper = styled.span`
  font-size: 16px;
`;

SnackBar.defaultProps = {
  type: NOTIFICATION_TYPES.INFO,
};

SnackBar.propTypes = {
  type: PropTypes.oneOf(Object.keys(NOTIFICATION_TYPES)),
  message: PropTypes.string.isRequired,
};
