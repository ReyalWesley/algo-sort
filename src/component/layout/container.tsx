import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-10">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-y-10 px-10">
        {children}
        <Outlet />
      </div>
    </div>
  );
};
