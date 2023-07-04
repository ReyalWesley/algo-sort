import React, { createContext, useContext, useEffect, useState } from 'react';

export const SortSpeedContext = createContext({
  sortSpeed: 500,
  setSortSpeed: (value: number) => {},
});

export const SortSpeedProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [sortSpeed, setSortSpeedValue] = useState<number>(500);

  const setSortSpeed = (value: number) => {
    setSortSpeedValue(value);
  };

  useEffect(() => {}, [sortSpeed]);

  return (
    <SortSpeedContext.Provider value={{ sortSpeed, setSortSpeed }}>
      {children}
    </SortSpeedContext.Provider>
  );
};

export const useSortSpeedContext = () => useContext(SortSpeedContext);
