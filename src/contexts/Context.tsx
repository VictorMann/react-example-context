import React, { createContext, useReducer } from "react";
import { userReducer, UserType, userInitialState } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type InitialStateType = {
  user: UserType;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

type Props = {
  children: JSX.Element;
};

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
};

/*
type ContextType = {
  name: string;
  age: number;
}

const initialState = {
  name: 'Terencio',
  age: 90,
};

export const Context = createContext<ContextType>(initialState);

type Props = {
  children: JSX.Element;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <Context.Provider value={initialState}>{children}</Context.Provider>
  )
};
*/