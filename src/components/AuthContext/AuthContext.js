import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('province 1');
  const [color, setColor] = useState();
  return (
    <AuthContext.Provider value={{myProvince, setMyProvince, color, setColor}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
