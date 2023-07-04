import React, { useEffect, useState } from 'react';
import { BarChart } from './graph/barChart';
import { useAlgosContext } from '../../../context/data';
import { useSortSpeedContext } from '../../../context/speed';

type GenerateListParam = {
  size?: number;
};

export const generateList = (
  { size = 10 }: GenerateListParam = { size: 10 }
): number[] => {
  const myList = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
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

  setData(dataCopy);
};

export type SortBlockPropsType = {
  algoName: string;
  loop?: boolean;
  sortFunction: (params: SortFunctionParamType) => SortFunctionReturnType;
  swap?: boolean;
};

export const SortBlock: React.FC<SortBlockPropsType> = ({
  algoName,
  loop = true,
  sortFunction,
  swap = true,
}) => {
  const context = useAlgosContext();
  const { sortSpeed } = useSortSpeedContext();

  const [data, setData] = useState<number[]>(context.data);
  const [iterator, setIterator] = useState(1);
  const [countSwap, setCountSwap] = useState(0);
  const [countLoop, setCountLoop] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [speed, setSpeed] = useState<number>(sortSpeed);

  useEffect(() => {
    setData(context.data);
    setIterator(1);
    setCountSwap(0);
    setCountLoop(0);
    setSorted(false);
  }, [context.data]);

  useEffect(() => {
    if (sortSpeed !== speed) {
      setSpeed(sortSpeed);
    }
  }, [sortSpeed, speed, setSpeed]);

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
      }, speed);
    }
  }, [countSwap, data, iterator, sortFunction, sorted, sortSpeed]);

  useEffect(() => {
    if (iterator === data.length - 1) {
      setCountLoop(countLoop + 1);
    }
  }, [iterator]);

  return (
    <article className="prose">
      <h1 className="text-black">{algoName}</h1>
      <div className="sm:flex gap-x-4 text-black">
        <div>
          {swap && <p>Number of swap: {countSwap}</p>}
          {loop && <p>Number of loop: {countLoop}</p>}
        </div>
        <BarChart dataSet={data} />
      </div>
    </article>
  );
};
