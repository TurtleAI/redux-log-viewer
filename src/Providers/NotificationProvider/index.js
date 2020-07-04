import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import { showNotification, hideNotification } from './actions';

export const NotificationContext = createContext({});

export default function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, 'state ---------')

  function createContextValue() {
    return {
      state,
      actions: {
        showNotification(data) {
          dispatch(showNotification(data));
        },
        hideNotification() {
          dispatch(hideNotification());
        },
      }
    };
  }

  return (
    <NotificationContext.Provider value={createContextValue()}>
      {children}
    </NotificationContext.Provider>
  );
}
