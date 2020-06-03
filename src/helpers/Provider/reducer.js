import { RESET_LOGS, SET_ACTIVE_LOG } from './constants';

export const initialState = {
  logs: [],
  activeLog: {},
  activeLogIndex: null,
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

    default:
      return state;
  }
}
