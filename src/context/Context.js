"use client"

import { createContext, useReducer } from "react";

export const Context = createContext()

const INIT_STATE = {
  products: [],
  edit: null,
  cart: {},
  cartLength: 0,
  paginatedPages: 0,
  detail: {},
}


const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {

  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
        <Context.Provider value={{

        }}>
            {children}
        </Context.Provider>
  );
};


export default ContextProvider;