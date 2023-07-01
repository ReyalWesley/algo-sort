import React, { useEffect, useState } from 'react';
import { List } from './list';

type BubbleSortPropsType = {
  orderDESC: boolean;
};

const generateList = (): number[] => {
  const myList = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = 1 + Math.floor(Math.random() * 100); // génère un nombre aléatoire entre 1 et 100
    myList.push(randomNumber);
  }
  return myList;
};

type SortParam = {
  data: number[];
  iterator: number;
  countSwap: number;
  sortFunction: (
    data: number[],
    iterator: number,
    setCountSwap: (int: number) => void,
    count: number
  ) => number[];
  setIterator: (iterator: number) => void;
  setSorted: (bool: boolean) => void;
  setData: (data: number[]) => void;
  setCountSwap: (int: number) => void;
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
    dataCopy = sortFunction(dataCopy, iterator, setCountSwap, countSwap);

    setIterator(iterator + 1);
  }

  //force rerender => useEffect data
  setData(dataCopy);
};

const bubbleSort = (
  sortedData: number[],
  iterator: number,
  setCount: (count: number) => void,
  count: number
): number[] => {
  if (sortedData[iterator] < sortedData[iterator - 1]) {
    const stockedValue = sortedData[iterator];
    sortedData[iterator] = sortedData[iterator - 1];
    sortedData[iterator - 1] = stockedValue;

    //compteur du nombre d'itérations de l'algorithme
    setCount(count + 1);
    return sortedData;
  }
  return sortedData;
};

const myList = generateList();

export const BubbleSort: React.FC<BubbleSortPropsType> = ({
  orderDESC,
  ...props
}) => {
  //dataset
  const [data, setData] = useState<number[]>(myList);

  const [iterator, setIterator] = useState(1);

  //loop counter
  const [countSwap, setCountSwap] = useState(0);
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
          sortFunction: () =>
            bubbleSort(data, iterator, setCountSwap, countSwap),
          setIterator,
          setSorted,
          setData,
          setCountSwap,
        });
      }, 50);
    }
  }, [countSwap, data, iterator]);

  useEffect(() => {
    if (iterator === data.length - 1) {
      setCountLoop(countLoop + 1);
    }
  }, [iterator]);

  return (
    <section>
      <h2>Bubble sort</h2>
      <div>
        <aside>
          <p>Number of swap: {countSwap}</p>
          <p>Number of loop: {countLoop}</p>
        </aside>
        <List data={data} />
      </div>
    </section>
  );
};
