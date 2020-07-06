import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSinged] = useState(false);

  const signIn = async () => {
    setSinged(true);
  };

  const signUp = async () => {
    setSinged(true);
  };

  const signOut = async () => {
    setSinged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
