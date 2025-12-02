import React, { createContext, useContext, useState, useEffect } from "react";

const MobileNavbarContext = createContext();

export const MobileNavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      // cleanup for safety
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <MobileNavbarContext.Provider value={{ isOpen, setIsOpen, toggleNavbar }}>
      {children}
    </MobileNavbarContext.Provider>
  );
};

export const useMobileNavbar = () => useContext(MobileNavbarContext);
