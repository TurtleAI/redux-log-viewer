import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './constants';

export const initialState = {
  duration: 0,
  isNotificationOpen: false,
  message: null,
  type: null
};

export default function reducer(state, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        duration: action.payload.duration,
        isNotificationOpen: true,
        message: action.payload.message,
        type: action.payload.type,
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        duration: 0,
        isNotificationOpen: false,
        message: null,
        type: null
      };

    default:
      return state;
  }
}
