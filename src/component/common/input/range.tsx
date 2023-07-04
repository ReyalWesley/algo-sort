import { useAlgosContext } from '../../../context/data';
import { useSortSpeedContext } from '../../../context/speed';
import React, { useState, useEffect } from 'react';

export const RangeSlider: React.FC = () => {
  const { sortSpeed, setSortSpeed } = useSortSpeedContext();
  const { refreshData } = useAlgosContext();
  const [value, setValue] = useState<number>(sortSpeed);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setSortSpeed(newValue);
      refreshData();
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    setSortSpeed(value);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={0}
        max={1000}
        value={value}
        onChange={handleChange}
        className="range"
      />
      <span>{value / 1000}s</span>
    </div>
  );
};
