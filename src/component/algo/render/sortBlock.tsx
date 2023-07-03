import React, { useEffect, useState } from 'react';
import { List } from './graph/barChart';

type GenerateListParam = {
  size?: number;
};

export const generateList = (
  { size = 10 }: GenerateListParam = { size: 10 }
): number[] => {
  const myList = [];
  for (let i = 0; i < size; i++) {
    // génère un nombre aléatoire entre 1 et 100
    const randomNumber = 5 + Math.floor(Math.random() * 100);
    myList.push(randomNumber);
  }
  return myList;
};

export type SortFunctionParamType = {
  data: number[];
  iterator: number;
  countSwap: number;
  setCountSwap: (count: number) => void;
};

export type SortFunctionReturnType = {
  data: number[];
};

type SortParam = {
  data: number[];
  iterator: number;
  countSwap: number;
  sortFunction: (params: SortFunctionParamType) => SortFunctionReturnType;
  setIterator: (iterator: number) => void;
  setSorted: (bool: boolean) => void;
  setData: (data: number[]) => void;
  setCountSwap: (count: number) => void;
};

const sortLoop = ({
  data,
  iterator,
  countSwap,
  sortFunction,
  setIterator,
  setSorted,
  setData,
  setCountSwap,
}: SortParam) => {
  let dataCopy = data.slice();

  if (iterator > data.length - 1) {
    setIterator(1);

    let isSorted = true;
    for (let i = 0; i < dataCopy.length - 1; i++) {
      if (dataCopy[i] > dataCopy[i + 1]) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) {
      setSorted(true);
    }
  } else {
    dataCopy = sortFunction({
      data: dataCopy,
      iterator,
      countSwap,
      setCountSwap,
    }).data;

    setIterator(iterator + 1);
  }

  //force rerender => useEffect data
  setData(dataCopy);
};

export type SortBlockPropsType = {
  algoName: string;
  loop?: boolean;
  sortFunction: (params: SortFunctionParamType) => SortFunctionReturnType;
  swap?: boolean;
  dataSet: number[];
};

export const SortBlock: React.FC<SortBlockPropsType> = ({
  algoName,
  loop = true,
  sortFunction,
  swap = true,
  dataSet,
}) => {
  //dataset
  const [data, setData] = useState<number[]>(dataSet);

  const [iterator, setIterator] = useState(1);

  //swap counter
  const [countSwap, setCountSwap] = useState(0);

  //loop counter
  const [countLoop, setCountLoop] = useState(0);

  //state to stop the sort if the dataset is sorted
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    if (!sorted) {
      setTimeout(() => {
        sortLoop({
          data,
          iterator,
          countSwap,
          sortFunction,
          setIterator,
          setSorted,
          setData,
          setCountSwap,
        });
      }, 50);
    }
  }, [countSwap, data, iterator, sortFunction, sorted]);

  useEffect(() => {
    if (iterator === data.length - 1) {
      setCountLoop(countLoop + 1);
    }
  }, [iterator]);

  return (
    <article className="prose">
      <h1>{algoName}</h1>
      <div className="sm:flex gap-x-4">
        <div>
          {swap && <p>Number of swap: {countSwap}</p>}
          {loop && <p>Number of loop: {countLoop}</p>}
        </div>
        <List dataSet={data} />
      </div>
    </article>
  );
};
