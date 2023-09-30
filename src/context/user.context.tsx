"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type User = {
  email: string;
  role: string;
  accessToken: string;
  loggedIn: boolean;
};

type ActionType = {
  type: string;
  email: string;
  role: string;
  accessToken: string;
};

const initialState: User = {
  email: "",
  role: "",
  accessToken: "",
  loggedIn: false,
};

const reducer = (state: User, action: ActionType) => {
  switch (action.type) {
    case "LOGGEDIN":
      return {
        ...state,
        email: action.email,
        role: action.role,
        accessToken: action.accessToken,
        loggedIn: true,
      };
    case "LOGGEDOUT":
      return {
        ...state,
        email: "",
        role: "",
        accessToken: "",
        loggedIn: false,
      };
    default:
      return state;
  }
};

export const UserContext = createContext<{
  user: User;
  dispatch: Dispatch<ActionType>;
}>({ user: initialState, dispatch: () => null });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
