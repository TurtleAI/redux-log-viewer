function processValue(value) {
  if (value === 'false' || value === 'true') {
    return value === 'true' ? true : false;
  }

  if (!isNaN(value)) {
    return Number(value);
  }

  return value;
}

function processStateString(stateString) {
  const startIndex = stateString.indexOf('(') + 1;
  const endIndex = stateString.lastIndexOf(')');

  const stringArr = stateString.substring(startIndex, endIndex).split(',');

  return stringArr.reduce(function (acc, curr) {
    const [property, value] = curr.split(':');
    acc[property.trim()] = processValue(value.trim());
    return acc;
  }, {});
}

function processActionString(actionString) {
  const action = {};

  if (actionString.includes('(') && actionString.includes(')') && actionString.includes('state')) {
    const startIndex = actionString.indexOf('(') + 1;
    const endIndex = actionString.lastIndexOf(')');

    const [, value] = actionString.substring(startIndex, endIndex).split(':');
    action.type = actionString.substring(0, actionString.indexOf('('));
    action.payload = value.trim();
  } else {
    action.type = actionString;
  }

  return action;
}

export function actionStringMapFormatter(rawLog) {
  const log = JSON.parse(rawLog);

  log.action = processActionString(log.action);

  if (typeof log.state !== 'string') {
    return log;
  }
  log.state = processStateString(log.state);

  return log;
}
