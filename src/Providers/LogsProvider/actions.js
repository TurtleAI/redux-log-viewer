import { RESET_LOGS, SET_ACTIVE_LOG, SET_FILE_FORMAT_TYPE, SET_CUSTOM_ROW_HANDLER } from './constants';

export function resetLogs(logs) {
  return {
    type: RESET_LOGS,
    payload: logs,
  };
}

export function setActiveLog(index) {
  return {
    type: SET_ACTIVE_LOG,
    payload: index,
  };
}

export function setFileFormatType(value) {
  return {
    type: SET_FILE_FORMAT_TYPE,
    payload: value,
  };
}

export function setCustomRowHandler(customRowHandler) {
  return {
    type: SET_CUSTOM_ROW_HANDLER,
    payload: customRowHandler,
  };
}
