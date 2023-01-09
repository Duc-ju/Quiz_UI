import React, { useContext, useEffect, useState } from "react";
import classes from "./asynchronousPreRoom.module.css";
import LoadingButton from "../../commonComponents/LoadingButton";
import { AsynchronousRoomContext } from "../../rootComponent/asynchronousRoom/AsynchronousRoomRouter/context/asynchronousRoomProvider";

function AsynchronousPreRoom(props) {
  const { handleConnectSocket, handleDisconnectSocket } = useContext(
    AsynchronousRoomContext
  );
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    handleDisconnectSocket();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>Tên của bạn là...</h2>
        <div className={classes.inputContainer}>
          <input
            value={nickname}
            placeholder={"Nhập tên của bạn trong phòng thi"}
            onChange={(e) => setNickname(e.target.value)}
            className={classes.input}
          />
        </div>
        <LoadingButton
          className={classes.button}
          onClick={() => handleConnectSocket(nickname)}
          fullWidth={true}
        >
          Bắt đầu
        </LoadingButton>
      </div>
    </div>
  );
}

export default AsynchronousPreRoom;
