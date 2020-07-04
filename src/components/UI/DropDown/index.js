import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BRAND_WHITE, BRAND_ACCENT } from '../../../settings/_colors.style';
import { DEFAULT_FORMAT_TYPE, CUSTOM_FORMAT_TYPE } from '../../../utils/constants';

export default function DropDown({ options, value, onChange }) {
  return (
    <DropDown.Wrapper>
      <DropDown.Select value={value} onChange={onChange}>
        <DropDown.Option value={DEFAULT_FORMAT_TYPE.value}>{DEFAULT_FORMAT_TYPE.label}</DropDown.Option>
        {
          options.map(option => <DropDown.Option value={option.value}>{option.label}</DropDown.Option>)
        }
        <DropDown.Option value={CUSTOM_FORMAT_TYPE.value}>{CUSTOM_FORMAT_TYPE.label}</DropDown.Option>
      </DropDown.Select>
      <DropDown.Icon>▼</DropDown.Icon>
    </DropDown.Wrapper>
  );
}

DropDown.Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-color: ${BRAND_ACCENT};
  border-style: solid;
  border-width: 1px;
`;

DropDown.Select = styled.select`
  width: 100%;
  height: auto;
  position: relative;
  padding: 10px 14px;
  background-color: transparent;
  z-index: 1;
  color: ${BRAND_WHITE};
  font-family: 'Source Code Pro', monospace;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    cursor: pointer;
  }
`;

DropDown.Option = styled.option``;

DropDown.Icon = styled.span`
  position: absolute;
  right: 14px;
  top: 10px;
  color: ${BRAND_WHITE};
`;


DropDown.defaultProps = {
  value: 'default',
  options: [],
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
