import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen justify-center gap-y-10">
        {children}
        <Outlet />
      </div>
    </>
  );
};
