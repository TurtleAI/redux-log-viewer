import React from 'react';

const diffStyle = { backgroundColor: '#5D7148', padding: '0 5px', borderRadius: '3px', color: '#fff' };

function formatValueStructure(value, isArray = false) {
  if (isArray) {
    return value.length > 0 ? '[...]' : '[]';
  }
  return Object.keys(value).length > 0 ? '{...}' : '{}';
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
        if (Array.isArray(item)) return insertString(string, `${formatValueStructure(item, true)}`);
        return insertString(string, `${formatValueStructure(item)}`);
      }
      return insertString(string, `${typeof item === 'string' ? `"${item}"` : `${item}`}`);
    }, '');
  } else {
    text = Object.keys(obj).reduce((string, key) => {
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) return insertString(string, `${key}: ${formatValueStructure(obj[key], true)}`);
        return insertString(string, `${key}: ${formatValueStructure(obj[key])}`);
      }
      return insertString(string, `${key}: ${typeof obj[key] === 'string' ? `"${obj[key]}"` : `${obj[key]}`}`);
    }, '');
  }

  return isArray ? `[${text}]` : `{ ${text} }`;
}

export function getItemString(isDiff) {
  return function (_, data) {
    return <span style={isDiff ? {} : { color: '#C8A085' }}>{formatObject(data)}</span>;
  }
}

export function valueRenderer(isDiff) {
  return function (_, raw) {
    if (isDiff && raw.includes('[[primitive]]')) {
      const [label, value] = raw.split('[[primitive]]');
      
      return (
        <>
          <span style={{ ...diffStyle, backgroundColor: '#855F6C' }}>{label}</span>
          <span style={{ color: '#C57AB7', padding: '0 10px' }}>{'=>'}</span>
          <span style={diffStyle}>{value}</span>
        </>
      );
    }

    return <span style={isDiff ? diffStyle : {}}>{typeof raw === 'string' ? `"${raw}"` : `${raw}`}</span>;
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
