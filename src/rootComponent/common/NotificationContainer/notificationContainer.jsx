import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext/notificationContext";

function NotificationContainer(props) {
  const { notificationContent } = useContext(NotificationContext);
  if (notificationContent === null) return null;
  return <div>{notificationContent}</div>;
}

export default NotificationContainer;
