import React from 'react';

type ListPropsType = {
  data: number[];
};

export const List: React.FC<ListPropsType> = ({ data }) => {
  return (
    <div className="flex items-end">
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className="bg-red-400 w-10"
            style={{ height: 'calc(1vh * ' + data * 0.2 + ')' }}
          ></div>
        );
      })}
    </div>
  );
};
