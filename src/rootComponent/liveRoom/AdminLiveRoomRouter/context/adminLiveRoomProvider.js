import React from "react";

export const LiveRoomContext = React.createContext();

function AdminLiveRoomProvider({ children }) {
  return (
    <LiveRoomContext.Provider value={{}}>{children}</LiveRoomContext.Provider>
  );
}

export default AdminLiveRoomProvider;
