import { Icon } from '../common/icon';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Algo sort</a>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/algos'} className="font-semibold text-lg">
              Algorithms
            </Link>
          </li>
          <li>
            <Link to={'/about'} className="font-semibold text-lg">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn btn-outline"
          to={'https://github.com/ReyalWesley/algo-sort'}
          target="_blank"
        >
          <Icon name="github" />
          github
        </Link>
      </div>
    </div>
  );
};
