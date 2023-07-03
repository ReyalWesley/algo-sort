import React from 'react';
import { Algos } from './algos';

export const Home: React.FC = () => {
  return (
    <>
      <article className="prose mb-10">
        <h1 className="text-center">Description</h1>
        <p className="text-justify">
          Our website is an interactive platform that showcases dynamic
          renderings of sorting algorithms. Dive into the fascinating world of
          sorting algorithms and explore their functionalities through visually
          engaging and interactive demonstrations.
        </p>
      </article>
      <Algos />
    </>
  );
};
