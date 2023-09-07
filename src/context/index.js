import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        cartData,
        setCartData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useContextData = () => useContext(AppContext);
