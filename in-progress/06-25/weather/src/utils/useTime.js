import React, { useEffect, useState } from 'react'

export const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(getTime());
    }, refreshCycle)

    return () => clearInterval(intervalId);
  }, [refreshCycle]);

  return now;
}
export const getTime = () => {
  return new Date();
}