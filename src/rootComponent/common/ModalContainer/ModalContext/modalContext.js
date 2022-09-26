import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  return (
    <ModalContext.Provider value={{ modalContent, setModalContent }}>
      {children}
    </ModalContext.Provider>
  );
};
