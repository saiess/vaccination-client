import React, { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  signIn: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {},
});

export default AuthContext;
