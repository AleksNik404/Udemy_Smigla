import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidemenu = (text, coord) => {
    const page = sublinks.find((link) => link.page === text);
    setLocation(coord);
    setPage(page);
    setIsSidemenuOpen(true);
  };
  const closeSidemenu = () => {
    setIsSidemenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidemenuOpen,
        isSidebarOpen,
        openSidemenu,
        openSidebar,
        closeSidemenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
