import React, { useEffect, useContext } from 'react';

import { NotificationContext } from '../../Providers/NotificationProvider';
import SnackBar from '../UI/SnackBar';

export default function Notification() {
  const {
    state: { duration, isNotificationOpen, message, type },
    actions: { hideNotification },
  } = useContext(NotificationContext);

  useEffect(
    function() {
      if (isNotificationOpen) {
        setTimeout(function() {
          hideNotification();
        }, duration);
      }
    },
    [isNotificationOpen, duration, hideNotification],
  );

  return isNotificationOpen && message && <SnackBar type={type} message={message} />;
}
