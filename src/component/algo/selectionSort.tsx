import {
  SortFunctionParamType,
  SortFunctionReturnType,
} from './render/sortBlock';

export const selectionSortFunction = ({
  data,
  iterator,
  countSwap,
  setCountSwap,
}: SortFunctionParamType): SortFunctionReturnType => {
  const unsortedList = data.slice(iterator - 1);
  const idx = iterator - 1 + unsortedList.indexOf(Math.min(...unsortedList));

  if (data[iterator - 1] !== data[idx]) {
    const storedValue = data[iterator - 1];
    data[iterator - 1] = data[idx];
    data[idx] = storedValue;
    setCountSwap(countSwap + 1);
  }

  return { data };
};
