import {
  SortBlock,
  SortBlockPropsType,
  generateList,
} from './render/sortBlock';
import { bubbleSortFunction } from './bubbleSort';
import { bogoSortFunction } from './bogoSort';
import React from 'react';

const data = generateList();

const algos: SortBlockPropsType[] = [
  {
    algoName: 'Bubble sort',
    loop: true,
    sortFunction: bubbleSortFunction,
    swap: true,
    dataSet: data,
  },
  {
    algoName: 'Bogo sort',
    loop: false,
    sortFunction: bogoSortFunction,
    swap: true,
    dataSet: data,
  },
];

export const Algos: React.FC = () => {
  return (
    <>
      {algos.map(
        (
          { algoName, loop, sortFunction, swap, dataSet }: SortBlockPropsType,
          idx: number
        ) => (
          <SortBlock
            key={idx}
            algoName={algoName}
            dataSet={dataSet}
            loop={loop}
            sortFunction={sortFunction}
            swap={swap}
          />
        )
      )}
    </>
  );
};
