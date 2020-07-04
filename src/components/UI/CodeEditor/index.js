import React from 'react';
import styled from 'styled-components';
import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import { BRAND_ACCENT } from '../../../settings/_colors.style';

export default function CodeEditor({ value, onChange }) {
  return (
    <CodeEditor.Wrapper>
      <AceEditor
        mode="javascript"
        theme="xcode"
        onChange={onChange}
        value={value}
        name="REDUX_LOG_VIEWER"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        fontSize={14}
        width="100%"
        wrapEnabled
      />
    </CodeEditor.Wrapper>
  );
}

CodeEditor.Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-color: ${BRAND_ACCENT};
  border-style: solid;
  border-width: 1px;
`;

CodeEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
