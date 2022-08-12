import React, {createContext, useState} from 'react';

type createContextInitialization = {
  myProvince: string;
  setMyProvince: (value: string) => void;
  trending: string;
  setTrending: (value: string) => void;
  color: any;
  setColor: (value: any) => void;
};

export const AuthContext = createContext<createContextInitialization>({
  myProvince: '',
  setMyProvince: () => {},
  trending: '',
  setTrending: () => {},
  color: '',
  setColor: () => {},
});

/**
 * It returns a context provider that has the value of the state variables and the functions to change
 * them
 * @returns AuthContext.Provider
 */
const AuthProvider = ({children}: any) => {
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
