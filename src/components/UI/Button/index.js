import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BRAND_PRIMARY, BRAND_PRIMARY_HOVER, DIM_GRAY, BRAND_WHITE } from '../../../settings/_colors.style';

export default function Button({ onClick, children }) {
  return (
    <Button.Wrapper onClick={onClick}>{children}</Button.Wrapper>
  );
}

Button.Wrapper = styled.button`
  padding: 8px 14px;
  border-style: solid;
  border-width: 1px;
  border-left-width: 0;
  background-color: ${BRAND_PRIMARY};
  border-color: ${DIM_GRAY};
  color: ${BRAND_WHITE};
  font-family: 'Source Code Pro', monospace;

  &:hover {
    cursor: pointer;
    background-color: ${BRAND_PRIMARY_HOVER};
  }

  &:first-child {
    border-left-width: 1px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
