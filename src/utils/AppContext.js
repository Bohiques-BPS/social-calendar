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
    posts: [],
    session: {
      login: false,
      facebook: false
    },
    loading: true,
    modal: {
      open: false,
      title: '',
      avatar: null,
      content: null,
    },
    scheduled: null,//(new Array(12).fill([])),
    error: null,
  });

  return <AppContext.Provider value={[context, setContext]}>{children}</AppContext.Provider>;
};

export { useAppContext, AppContextProvider };
