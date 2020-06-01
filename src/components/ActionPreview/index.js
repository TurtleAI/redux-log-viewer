import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
import JSONStateTree from '.././UI/JSONStateTree';
import { LogsContext } from '../../helpers/Provider';
import { BRAND_WHITE, BRAND_SECONDARY, DIM_GRAY } from '../../settings/_colors.style';

const ACTIONS = {
  STATE: 'STATE',
  ACTION: 'ACTION',
  DIFF: 'DIFF',
};

export default function ActionPreview() {
  const [active, setActive] = useState(ACTIONS.STATE);
  const { state } = useContext(LogsContext);

  let data = null;

  if (active === ACTIONS.ACTION) {
    data = state.activeLog.action || {};
  }
  else {
    data = state.activeLog.state || {};
  }

  return (
    <ActionPreview.Wrapper>
      <ActionPreview.Header>
        Diff
        <ActionPreview.ButtonsWrapper>
          <Button onClick={() => setActive(ACTIONS.ACTION)}>Action</Button>
          <Button onClick={() => setActive(ACTIONS.STATE)}>State</Button>
          <Button onClick={() => setActive(ACTIONS.DIFF)}>Diff</Button>
        </ActionPreview.ButtonsWrapper>
      </ActionPreview.Header>
      <ActionPreview.JSONTreeWrapper>
        <JSONStateTree data={data} />
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
