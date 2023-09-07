import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [bookingCount, setBookingCount] = useState(0);
  const [firstItemAdded, setFirstItemAdded] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cartData,
        setCartData,
        bookingCount,
        setBookingCount,
        firstItemAdded,
        setFirstItemAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useContextData = () => useContext(AppContext);
