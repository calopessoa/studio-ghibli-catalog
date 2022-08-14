import React, { createContext, useContext, useState } from "react";

export enum Page {
  Titles = 'Titles',
  Directors = 'Directors',
}

type ContextType = {
  page: Page;
  setPage: (page: Page) => void;
}


const Context = createContext<ContextType>({
  page: Page.Titles,
  setPage: (page: Page) => console.warn('no page provider'),
});

export const usePage = () => useContext(Context);

export const PageStore = ({ children }: any) => {
  const [page, setPage] = useState(Page.Titles);
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
};