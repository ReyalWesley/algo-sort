import { generateList } from '../component/algo/render/sortBlock';
import React, { createContext, useContext, useState } from 'react';

// Créez un contexte pour le tableau de nombres et la méthode de rafraîchissement
export const AlgosContext = createContext({
  data: [] as number[],
  refreshData: () => {},
});

// Créez le composant fournisseur du contexte
export const AlgosProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<number[]>(generateList());

  const refreshData = () => {
    setData(generateList());
  };

  return (
    <AlgosContext.Provider value={{ data, refreshData }}>
      {children}
    </AlgosContext.Provider>
  );
};

export const useAlgosContext = () => useContext(AlgosContext);
