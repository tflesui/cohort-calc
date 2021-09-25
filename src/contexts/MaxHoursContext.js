import React, { createContext, useState } from 'react';

export const MaxHoursContext = createContext();

const MaxHoursProvider = props => {
  const [maxHours, setMaxHours] = useState(0);

  const increaseHours = maxHours => {
    setMaxHours(maxHours + 1);
  }

  const decreaseHours = maxHours => {
    setMaxHours(maxHours - 1);
  }

  return (
    <MaxHoursContext.Provider 
      value={{maxHours, increaseHours, decreaseHours}}>
      { props.children }
    </MaxHoursContext.Provider>
  );
}

export default MaxHoursProvider;
