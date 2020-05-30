import React from 'react';
import JSONTree from 'react-json-tree';
import PropTypes from 'prop-types';

import { getItemString, getJsonTreeTheme, valueRenderer } from './utils';

const theme = {
  base00: '#2A2F3A',
  base01: '#282828',
  base02: '#383838',
  base03: '#474C55',
  base04: '#b8b8b8',
  base05: '#C8A085',
  base06: '#e8e8e8',
  base07: '#FFFFFF',
  base08: '#C8A085',
  base09: '#F06926',
  base0A: '#f7ca88',
  base0B: '#A1C659',
  base0C: '#86c1b9',
  base0D: '#69A9C7',
  base0E: '#EC31C0',
  base0F: '#C8A085'
};

export default function JSONStateTree({ data, isDiff }) {
  return (
    <JSONTree
      data={data}
      theme={getJsonTreeTheme(theme)}
      invertTheme={false}
      getItemString={getItemString(isDiff)}
      valueRenderer={valueRenderer(isDiff)}
      hideRoot
    />
  );
}

JSONStateTree.propTypes = {
  isDiff: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};
