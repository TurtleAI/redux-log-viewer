import React, { useContext } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import ActionItem from '../UI/ActionItem';
import { LogsContext } from '../../helpers/Provider';
import { DIM_GRAY } from '../../settings/_colors.style';

function getTimeStamp(logs, index) {
  if (index === 0) return '+00:00:00';
  console.log(new Date(logs[index].time).getTime() - new Date(logs[index -1].time).getTime(), 'time delta ------')
  return dateFormat(new Date(logs[index].time).getTime() - new Date(logs[index -1].time).getTime(), '+MM:ss.L');
}

export default function ActionItemList() {
  const { state, actions } = useContext(LogsContext);

  function handleActionClick(index) {
    return function onClick() {
      actions.setActiveLog(index);
    }
  }

  return (
    <ActionItemList.Wrapper>
      {
        state.logs.map((log, idx) => (
          <ActionItem
            isActive={state.activeLogIndex === idx}
            onClick={handleActionClick(idx)}
            key={log.action.type + idx}
            action={log.action.type}
            time={getTimeStamp(state.logs, idx)}
          />
        ))
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
