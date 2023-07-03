import React from 'react';
import '../index.css';
import { Outlet } from 'react-router-dom';
import { bogoSortFunction } from '../component/algo/bogoSort';
import { bubbleSortFunction } from '../component/algo/bubbleSort';
import {
  generateList,
  SortBlockPropsType,
  SortBlock,
} from '../component/algo/render/sortBlock';

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
      <Outlet />
    </>
  );
};
