import {
  SortFunctionParamType,
  SortFunctionReturnType,
} from '../render/sortBlock';

function shuffleArray(data: number[]) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}

export const bogoSortFunction = (
  params: SortFunctionParamType
): SortFunctionReturnType => {
  const { data, setCountSwap, countSwap, ...props } = params;
  setCountSwap(countSwap + 1);
  return { data: shuffleArray(data) };
};
