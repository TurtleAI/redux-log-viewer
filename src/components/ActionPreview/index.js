import React from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
import JSONStateTree from '.././UI/JSONStateTree';
import { BRAND_WHITE, BRAND_SECONDARY, DIM_GRAY } from '../../settings/_colors.style';

const ACTIONS = {
  STATE: 'STATE',
  ACTION: 'ACTION',
  DIFF: 'DIFF',
};

export default function ActionPreview() {

  function handleButtonClick() {
    return function () {

    }
  }

  return (
    <ActionPreview.Wrapper>
      <ActionPreview.Header>
        Diff
        <ActionPreview.ButtonsWrapper>
          <Button onClick={handleButtonClick(ACTIONS.ACTION)}>Action</Button>
          <Button onClick={handleButtonClick(ACTIONS.STATE)}>State</Button>
          <Button onClick={handleButtonClick(ACTIONS.DIFF)}>Diff</Button>
        </ActionPreview.ButtonsWrapper>
      </ActionPreview.Header>
      <ActionPreview.JSONTreeWrapper>
        <JSONStateTree data={{ heelo: { me: 'yes', no: 34 }, array: [{}, {}, {}] }} />
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
  padding: 5px 14px;
  background-color: ${BRAND_SECONDARY};
  border-bottom: 1px solid ${DIM_GRAY};
`;

ActionPreview.ButtonsWrapper = styled.span`
  display: flex;
`;

ActionPreview.JSONTreeWrapper = styled.div`
  padding: 3px;
`;
