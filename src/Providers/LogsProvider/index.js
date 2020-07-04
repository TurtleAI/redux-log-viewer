import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import { resetLogs, setActiveLog, setFileFormatType, setCustomRowHandler } from './actions';

export const LogsContext = createContext({});

export default function LogsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function createContextValue() {
    return {
      state,
      actions: {
        setActiveLog(index) {
          dispatch(setActiveLog(index));
        },
        resetLogs(logs) {
          dispatch(resetLogs(logs));
        },
        setFileFormatType(value) {
          dispatch(setFileFormatType(value));
        },
        setCustomRowHandler(customRowHandler) {
          dispatch(setCustomRowHandler(customRowHandler))
        },
      }
    };
  }

  return (
    <LogsContext.Provider value={createContextValue()}>
      {children}
    </LogsContext.Provider>
  );
}
