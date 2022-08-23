import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncProvider from '@react-native-async-storage/async-storage';

type createContextInitialization = {
  saved: any;
  search: any;
  carouselData: any;
  setSaved: (value: any) => void;
  findSaved: () => void;
  setSearch: (value: any) => void;
  setCarouselData: (value: any) => void;
};

const SavedContext = createContext<createContextInitialization>({
  saved: [],
  search: [],
  carouselData: [],
  setSaved: () => {},
  findSaved: () => {},
  setSearch: () => {},
  setCarouselData: () => {},
});
const SaveProvider = ({children}: any) => {
  const [saved, setSaved] = useState([]);
  const [search, setSearch] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const findSaved = async () => {
    const result = await AsyncProvider.getItem('saved');
    if (result !== null) {
      setSaved(JSON.parse(result));
    }
  };

  const findSave = async () => {
    const result = await AsyncProvider.getItem('save');
    if (result !== null) {
      setSearch(JSON.parse(result));
    }
  };

  const findSaves = async () => {
    const result = await AsyncProvider.getItem('saves');
    if (result !== null) {
      setCarouselData(JSON.parse(result));
    }
  };

  useEffect(() => {
    findSaved();
    findSave();
    findSaves();
  }, []);

  return (
    <SavedContext.Provider
      value={{
        saved,
        setSaved,
        findSaved,
        setSearch,
        search,
        carouselData,
        setCarouselData,
      }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
export default SaveProvider;
