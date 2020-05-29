import { RESET_LOGS, SET_ACTIVE_LOG } from './constants';

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
