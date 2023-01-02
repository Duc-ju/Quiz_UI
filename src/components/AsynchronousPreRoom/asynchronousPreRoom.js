import React, { useContext, useState } from "react";
import classes from "./asynchronousPreRoom.module.css";
import LoadingButton from "../../commonComponents/LoadingButton";
import { AsynchronousRoomContext } from "../../rootComponent/asynchronousRoom/AsynchronousRoomRouter/context/asynchronousRoomProvider";

function AsynchronousPreRoom(props) {
  const { handleConnectSocket } = useContext(AsynchronousRoomContext);
  const [nickname, setNickname] = useState("");
  const handleConnectRoom = () => {};
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>Tên của bạn là...</h2>
        <div>
          <input
            value={nickname}
            placeholder={"Nhập tên của bạn trong phòng thi"}
            onChange={(e) => setNickname(e.target.value)}
            className={classes.input}
          />
        </div>
        <LoadingButton onClick={() => handleConnectSocket(nickname)}>
          Bắt đầu
        </LoadingButton>
      </div>
    </div>
  );
}

export default AsynchronousPreRoom;
