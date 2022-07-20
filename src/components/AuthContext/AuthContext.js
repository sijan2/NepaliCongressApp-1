import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

/**
 * It returns a context provider that has the value of the state variables and the functions to change
 * them
 * @returns AuthContext.Provider
 */
const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('province 1');
  const [trending, setTrending] = useState('sher bd. deuba');
  const [color, setColor] = useState();
  return (
    <AuthContext.Provider
      value={{
        myProvince,
        setMyProvince,
        trending,
        setTrending,
        color,
        setColor,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
