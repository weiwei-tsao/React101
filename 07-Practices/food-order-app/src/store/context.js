import React from 'react';

// 1. create a object of context
const GlobalContext = React.createContext();

// 2. wrapp the elements and define what can be providered in this context
const GlobalContextProvider = (props) => {
  const defaultContxt = {};

  return (
    <GlobalContext.Provider value={defaultContxt}>
      {props.children}
    </GlobalContext.Provider>
  );
};

// 3. make a custom hook to encapulate the context
const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};

// 4. export the elements
export { GlobalContextProvider, useGlobalContext };
