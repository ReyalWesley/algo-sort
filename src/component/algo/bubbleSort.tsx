import {
  SortFunctionParamType,
  SortFunctionReturnType,
} from '../render/sortBlock';

export const bubbleSortFunction = (
  params: SortFunctionParamType
): SortFunctionReturnType => {
  const { data, iterator, countSwap, setCountSwap } = params;

  if (data[iterator] < data[iterator - 1]) {
    const stockedValue = data[iterator];
    data[iterator] = data[iterator - 1];
    data[iterator - 1] = stockedValue;

    //compteur du nombre d'itérations de l'algorithme
    setCountSwap(countSwap + 1);
  }
  return { data };
};
