import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncProvider from '@react-native-async-storage/async-storage';

type createContextInitialization = {
  saved: any;
  setSaved: (value: any) => void;
  findSaved: () => void;
};

const SavedContext = createContext<createContextInitialization>({
  saved: [],
  setSaved: () => {},
  findSaved: () => {},
});
const SaveProvider = ({children}: any) => {
  const [saved, setSaved] = useState([]);

  const findSaved = async () => {
    const result = await AsyncProvider.getItem('saved');
    if (result !== null) {
      setSaved(JSON.parse(result));
    }
  };

  useEffect(() => {
    findSaved();
  }, []);

  return (
    <SavedContext.Provider value={{saved, setSaved, findSaved}}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
export default SaveProvider;
