
import React, { createContext, useState, useEffect } from 'react';

export const MyDataContext = createContext<any>(null);

export const MyDataContextProvider: React.FC = ({ children }:any) => {
  const [dataToSave, setDataToSave] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('mySavedData');
      return savedData ? JSON.parse(savedData) : null;
    }
    return null;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mySavedData', JSON.stringify(dataToSave));
    }
  }, [dataToSave]);

  return (
    <MyDataContext.Provider value={{ dataToSave, setDataToSave }}>
      {children}
    </MyDataContext.Provider>
  );
};