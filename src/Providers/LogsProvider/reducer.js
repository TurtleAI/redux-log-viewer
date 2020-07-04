import { RESET_LOGS, SET_ACTIVE_LOG, SET_FILE_FORMAT_TYPE, SET_CUSTOM_ROW_HANDLER } from './constants';
import { DEFAULT_FORMAT_TYPE } from '../../utils/constants';

export const initialState = {
  logs: [],
  activeLog: {},
  activeLogIndex: null,
  formatType: DEFAULT_FORMAT_TYPE.value,
  customRowHandler: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case RESET_LOGS:
      return {
        ...state,
        logs: action.payload,
        activeLog: action.payload[action.payload.length - 1],
        activeLogIndex: action.payload.length - 1,
      };

    case SET_ACTIVE_LOG:
      return {
        ...state,
        activeLog: state.logs[action.payload],
        activeLogIndex: action.payload,
      };

    case SET_FILE_FORMAT_TYPE:
      return {
        ...state,
        formatType: action.payload,
        customRowHandler: null,
      };

    case SET_CUSTOM_ROW_HANDLER:
      return {
        ...state,
        customRowHandler: action.payload,
      };

    default:
      return state;
  }
}
