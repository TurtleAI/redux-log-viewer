import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './constants';

export function showNotification(data) {
  return {
    type: SHOW_NOTIFICATION,
    payload: data,
  };
}

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
