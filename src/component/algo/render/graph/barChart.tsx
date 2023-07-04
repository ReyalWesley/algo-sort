import React from 'react';

type ListPropsType = {
  dataSet: number[];
};

export const BarChart: React.FC<ListPropsType> = ({ dataSet }) => {
  return (
    <div className="flex items-end gap-x-1">
      {dataSet.map((data: number, index: number) => {
        return (
          <div
            key={index}
            className="bg-red-400 w-7 text-center font-bold text-rose-50"
            style={{
              height: 'calc(1vh * ' + data * 0.2 + ')',
            }}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};
