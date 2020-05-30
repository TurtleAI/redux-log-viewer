import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BRAND_ACCENT, BRAND_WHITE } from '../../../settings/_colors.style';

export default function FileInput({ onChange }) {
  const [text, setText] = useState('Upload a file to browse logs from');
  function handleFileChange({ target: { files } }) {
    const reader = new FileReader();
    reader.onload = function () {
      const logs = this.result.split('\n');
      onChange && onChange(logs);
      files[0] && setText(files[0].name)
    };
    reader.readAsText(files[0]);
  }

  return (
    <FileInput.Wrapper>
      <FileInput.Input type="file" onChange={handleFileChange} />
      <FileInput.Text>{text}</FileInput.Text>
      ▼
    </FileInput.Wrapper>
  );
}

FileInput.Wrapper = styled.span`
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

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
};
