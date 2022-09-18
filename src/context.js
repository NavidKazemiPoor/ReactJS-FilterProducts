import React, { useContext, useReducer } from "react";
import { product, filter } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  product: product,
  defaultProduct: product,
  filter: filter,
  filterText: "همه",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filterProduct = (value) => {
    dispatch({ type: "FILTER", payload: value });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        filterProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
