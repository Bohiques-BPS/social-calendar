import React, { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Custom Hook
function useAppContext() {
  return useContext(AppContext);
}

const AppContextProvider = ({ children }) => {
  // Values given to the Context
  const [context, setContext] = useState({
    loading: false,
    error: null,
  });

  return <AppContext.Provider value={[context, setContext]}>{children}</AppContext.Provider>;
};

export { useAppContext, AppContextProvider };
