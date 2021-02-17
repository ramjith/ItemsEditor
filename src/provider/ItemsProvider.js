import React, { useReducer, createContext } from "react";

import reducer from './reducer';
import initialState from './initialState';

export const ItemsContext = createContext();

export const ItemsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ItemsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ItemsContext.Provider>
  );
};