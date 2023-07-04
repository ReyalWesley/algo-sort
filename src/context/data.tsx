import { generateList } from '../component/algo/render/sortBlock';
import React, { createContext, useContext, useState } from 'react';

export const AlgosContext = createContext({
  data: [] as number[],
  refreshData: () => {},
});

export const AlgosProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<number[]>(generateList());

  const refreshData = () => {
    console.log('data generated');
    setData(generateList());
  };

  return (
    <AlgosContext.Provider value={{ data, refreshData }}>
      {children}
    </AlgosContext.Provider>
  );
};

export const useAlgosContext = () => useContext(AlgosContext);
