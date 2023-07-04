import {
  SortFunctionParamType,
  SortFunctionReturnType,
} from './render/sortBlock';

export const moveElement = (
  list: number[],
  idxElt: number,
  idxInsert: number
) => {
  const firstPart = list.slice(0, idxElt);
  const secondPart = list.slice(idxElt + 1, list.length);

  const finalList = [...firstPart, ...secondPart];
  finalList.splice(idxInsert, 0, list[idxElt]);

  return finalList;
};

export const insertionSortFunction = ({
  data,
  iterator,
  countSwap,
  setCountSwap,
}: SortFunctionParamType): SortFunctionReturnType => {
  const idx = iterator;
  const sorted = false;

  if (data[idx] > data[idx - 1]) {
    return { data };
  } else {
    while (!sorted) {
      if (data[idx] < data[iterator - 1]) {
        iterator--;
      } else {
        data = moveElement(data, idx, iterator);
        setCountSwap(countSwap + 1);
        break;
      }
    }
  }
  return { data };
};
