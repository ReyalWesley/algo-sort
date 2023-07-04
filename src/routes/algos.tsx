import React from 'react';
import '../index.css';
import { Outlet } from 'react-router-dom';
import { bogoSortFunction } from '../component/algo/bogoSort';
import { bubbleSortFunction } from '../component/algo/bubbleSort';
import {
  SortBlockPropsType,
  SortBlock,
} from '../component/algo/render/sortBlock';
import { insertionSortFunction } from '../component/algo/insertionSort';
import { selectionSortFunction } from '../component/algo/selectionSort';
import { useAlgosContext } from '../context/data';
import { RangeSlider } from '../component/common/input/range';

const algos: SortBlockPropsType[] = [
  {
    algoName: 'Selection sort',
    loop: false,
    sortFunction: selectionSortFunction,
    swap: true,
  },
  {
    algoName: 'Insertion sort',
    loop: false,
    sortFunction: insertionSortFunction,
    swap: true,
  },
  {
    algoName: 'Bubble sort',
    loop: true,
    sortFunction: bubbleSortFunction,
    swap: true,
  },
  {
    algoName: 'Bogo sort',
    loop: false,
    sortFunction: bogoSortFunction,
    swap: true,
  },
];

export const Algos: React.FC = () => {
  const { refreshData } = useAlgosContext();

  return (
    <>
      <RangeSlider />
      <button
        type="button"
        className="btn btn-neutral fixed bottom-10"
        onClick={refreshData}
      >
        Refresh data
      </button>
      {algos.map(
        (
          { algoName, loop, sortFunction, swap }: SortBlockPropsType,
          idx: number
        ) => (
          <SortBlock
            key={idx}
            algoName={algoName}
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
