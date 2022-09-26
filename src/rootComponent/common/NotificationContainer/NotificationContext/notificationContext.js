import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationContent, setNotificationContent] = useState(null);
  return (
    <NotificationContext.Provider
      value={{ notificationContent, setNotificationContent }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
