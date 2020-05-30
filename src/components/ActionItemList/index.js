import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ActionItem from '../UI/ActionItem';
import { DIM_GRAY } from '../../settings/_colors.style';

export default function ActionItemList({ }) {
  return (
    <ActionItemList.Wrapper>
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
      <ActionItem action="LOGIN_TO_VIEW_HOME" time="0.00.35" />
    </ActionItemList.Wrapper>
  );
}

ActionItemList.Wrapper = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border-right: 1px solid ${DIM_GRAY};
`;
