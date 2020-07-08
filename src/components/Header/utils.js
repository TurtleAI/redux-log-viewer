export function validateLogFormat(log, errorMessage = 'Invalid log format, please check the file format.') {
  if (typeof log !== 'object') {
    throw TypeError(errorMessage);
  }

  if (
    !log.hasOwnProperty('action') ||
    !log.hasOwnProperty('state')
  ) {
    throw TypeError(errorMessage);
  }

  return log;
}
