import React from 'react';

const diffStyle = { backgroundColor: '#5D7148', padding: '0 5px', borderRadius: '3px', color: '#fff' };

function formatValueStructure(isArray = false) {
  return isArray ? '[...]' : '{...}';
}

function insertString(string, value) {
  return string.length ? `${string}, ${value}` : `${value}`;
}

function formatObject(obj) {
  let text = '';
  const isArray = Array.isArray(obj);

  if (isArray) {
    text = obj.reduce((string, item) => {
      if (typeof item === 'object') {
        if (Array.isArray(item)) return insertString(string, `${formatValueStructure(true)}`);
        return insertString(string, `${formatValueStructure()}`);
      }
      return insertString(string, `${item}`);
    }, '');
  } else {
    text = Object.keys(obj).reduce((string, key) => {
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) return insertString(string, `${key}: ${formatValueStructure(true)}`);
        return insertString(string, `${key}: ${formatValueStructure()}`);
      }
      return insertString(string, `${key}: ${typeof obj[key] === 'string' ? `"${obj[key]}"` : `${obj[key]}`}`);
    }, '');
  }

  return isArray ? `[${text}]` : `{ ${text} }`;
}

export function getItemString(isDiff) {
  return function (_, data) {
    return <span style={isDiff ? diffStyle : { color: '#C8A085' }}>{formatObject(data)}</span>;
  }
}

export function valueRenderer(isDiff) {
  return function (_, raw) {
    return <span style={isDiff && diffStyle}>{typeof raw === 'string' ? `"${raw}"` : raw}</span>;
  }
}

export function getJsonTreeTheme(base16Theme) {
  return {
    extend: base16Theme,
    nestedNode: ({ style }, _, __, expanded) => ({
      style: {
        ...style,
        whiteSpace: expanded ? 'inherit' : 'nowrap'
      }
    }),
    nestedNodeItemString: ({ style }, _, __, expanded) => ({
      style: {
        ...style,
        display: expanded ? 'none' : 'inline'
      }
    })
  };
}
