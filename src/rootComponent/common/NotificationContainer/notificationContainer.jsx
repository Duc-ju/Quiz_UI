import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NotificationContainer(props) {
  return <ToastContainer autoClose={6000} draggable={true} />;
}

export default NotificationContainer;
