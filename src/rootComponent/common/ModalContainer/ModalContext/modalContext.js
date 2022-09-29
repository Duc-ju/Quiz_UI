import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [open, setOpen] = useState(false);
  const openModal = (content) => {
    setOpen(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{ modalContent, open, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
