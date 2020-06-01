import React, { useContext } from 'react';
import styled from 'styled-components';

import ActionItem from '../UI/ActionItem';
import { LogsContext } from '../../helpers/Provider';
import { DIM_GRAY } from '../../settings/_colors.style';

export default function ActionItemList() {
  const { state } = useContext(LogsContext);

  return (
    <ActionItemList.Wrapper>
      {
        state.logs.map((log, idx) => (<ActionItem key={log.action.type + idx} action={log.action.type} time="0.00.35" />))
      }
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
