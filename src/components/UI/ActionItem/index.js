import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  BRAND_PRIMARY,
  BRAND_ACCENT,
  BRAND_WHITE,
  BRAND_SECONDARY,
  GRAY,
} from '../../../settings/_colors.style';

export default function ActionItem({ isActive, action, time }) {
  return (
    <ActionItem.Wrapper isActive={isActive}>
      {action}
      <ActionItem.TimeDiff>
        +{time}
      </ActionItem.TimeDiff>
    </ActionItem.Wrapper>
  );
}

ActionItem.Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 14px;
  background-color: ${BRAND_PRIMARY};
  border-top: 1px solid ${BRAND_ACCENT};
  color: ${BRAND_WHITE};

  ${({ isActive }) => isActive && `background-color: ${BRAND_SECONDARY};`}

  &:hover {
    cursor: pointer;
    background-color: ${BRAND_SECONDARY};
  }
`;

ActionItem.TimeDiff = styled.span`
  background-color: ${BRAND_ACCENT};
  font-size: 14px;
  color: ${GRAY};
  padding: 4px 10px;
  border-radius: 3px;
`;

ActionItem.propTypes = {
  isActive: PropTypes.bool,
  action: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
