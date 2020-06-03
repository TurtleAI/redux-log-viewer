import { diff } from 'jsondiffpatch';

function processDelta(value) {
  // exit early for primitives
  if (typeof value === 'object' && Array.isArray(value)) {
    if (value.length === 2) {
      return `${value[0]}[[primitive]]${value[1]}`;
    }

    return value;
  }

  // handle arrays
  if (typeof value === 'object' && value.hasOwnProperty('_t')) {
    const result = [];
    for (const key in value) {
      if (key !== '_t') {
        result.push(value[key][0]);
      }
    }

    return result;
  }

  // handle objects
  const result = {};
  for (const key in value) {
    result[key] = processDelta(value[key]);
  }
  return result;
}

export function compareStateDiff({ logs, activeLog, activeLogIndex }) {
  if (activeLogIndex && logs.length > 1) {
    return processDelta(diff(logs[activeLogIndex - 1].state, activeLog.state));
  }

  return 'States are equal';
}
