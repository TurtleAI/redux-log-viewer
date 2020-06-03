import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
import JSONStateTree from '.././UI/JSONStateTree';
import { LogsContext } from '../../helpers/Provider';
import { BRAND_WHITE, BRAND_SECONDARY, DIM_GRAY } from '../../settings/_colors.style';
import { compareStateDiff } from './utils';

const ACTIONS = {
  STATE: 'State',
  ACTION: 'Action',
  DIFF: 'Diff',
};

export default function ActionPreview() {
  const [active, setActive] = useState(ACTIONS.DIFF);
  const { state } = useContext(LogsContext);

  let data = {};

  switch (active) {
    case ACTIONS.ACTION:
      data = state.activeLog.action || 'No action to display.';
      break;
    case ACTIONS.DIFF:
      data = compareStateDiff(state);
      break;
    default:
      data = state.activeLog.state || 'No state to display.';
      break;
  }

  return (
    <ActionPreview.Wrapper>
      <ActionPreview.Header>
        {active}
        <ActionPreview.ButtonsWrapper>
          <Button isActive={active === ACTIONS.ACTION} onClick={() => setActive(ACTIONS.ACTION)}>Action</Button>
          <Button isActive={active === ACTIONS.STATE} onClick={() => setActive(ACTIONS.STATE)}>State</Button>
          <Button isActive={active === ACTIONS.DIFF} onClick={() => setActive(ACTIONS.DIFF)}>Diff</Button>
        </ActionPreview.ButtonsWrapper>
      </ActionPreview.Header>
      <ActionPreview.JSONTreeWrapper>
        {
          typeof data === 'string'
            ? <ActionPreview.EqualStateText>{data}</ActionPreview.EqualStateText>
            : <JSONStateTree data={data} isDiff={active === ACTIONS.DIFF} />
        }
      </ActionPreview.JSONTreeWrapper>
    </ActionPreview.Wrapper>
  );
}

ActionPreview.Wrapper = styled.div`
  width: calc(60% - 1.8px);
  margin-left: 1.8px;
  border-left: 1px solid ${DIM_GRAY};
`;

ActionPreview.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${BRAND_WHITE};
  padding: 8px 14px;
  background-color: ${BRAND_SECONDARY};
  border-bottom: 1px solid ${DIM_GRAY};
`;

ActionPreview.ButtonsWrapper = styled.span`
  display: flex;
`;

ActionPreview.JSONTreeWrapper = styled.div`
  padding: 3px;
`;

ActionPreview.EqualStateText = styled.span`
  margin: 20px;
  display: inline-block;
  color: ${BRAND_WHITE};
  text-decoration: underline;
`;
