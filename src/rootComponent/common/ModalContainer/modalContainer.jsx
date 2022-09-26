import React, { useContext } from "react";
import { ModalContext } from "./ModalContext/modalContext";

function ModalContainer(props) {
  const { modalContent } = useContext(ModalContext);
  if (modalContent === null) return null;
  return <div>{modalContent}</div>;
}

export default ModalContainer;
