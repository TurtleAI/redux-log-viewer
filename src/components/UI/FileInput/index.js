import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BRAND_ACCENT, BRAND_WHITE } from '../../../settings/_colors.style';

export default function FileInput({ onChange, text }) {

  return (
    <FileInput.Wrapper>
      <FileInput.Input type="file" onChange={onChange} />
      <FileInput.Text>{text}</FileInput.Text>
      ▼
    </FileInput.Wrapper>
  );
}

FileInput.Wrapper = styled.span`
  width: 100%;
  color: ${BRAND_WHITE};
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  border-color: ${BRAND_ACCENT};
  border-style: solid;
  border-width: 1px;
`;

FileInput.Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  font-size: 0px;

  &::-webkit-file-upload-button {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

FileInput.Text = styled.span`
  margin: 0;
  display: block;
  width: 100%;
`;

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  rowHandler: PropTypes.func,
};
