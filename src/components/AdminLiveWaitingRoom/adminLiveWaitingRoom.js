import React, { useContext } from "react";
import classes from "./adminLiveWaitingRoom.module.css";
import Icon from "../../commonComponents/Icon";
import { GrGroup } from "@react-icons/all-files/gr/GrGroup";
import LoadingButton from "../../commonComponents/LoadingButton";
import { Link, useParams } from "react-router-dom";
import Button from "../../commonComponents/Button";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { ImQrcode } from "@react-icons/all-files/im/ImQrcode";
import { BsLink45Deg } from "@react-icons/all-files/bs/BsLink45Deg";
import { IoTabletLandscape } from "@react-icons/all-files/io5/IoTabletLandscape";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { GrList } from "@react-icons/all-files/gr/GrList";
import fillRoomName from "../../logic/fillRoomName";
import { LiveRoomContext } from "../../rootComponent/adminLiveRoom/AdminLiveRoomRouter/context/adminLiveRoomProvider";

function AdminLiveWaitingRoom(props) {
  const { handleStartRoom, listActiveUser } = useContext(LiveRoomContext);
  const { roomId } = useParams();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.contentContainer}>
          <div className={classes.topTitle}>Để làm quizz này</div>
          <div className={classes.group}>
            <div>1. Sử dụng bất kỳ thiết bị nào để mở</div>
            <div className={classes.joinLinkContainer}>
              <div>
                <Link to={"/"}>joinmyquiz.com</Link>
                <Button>
                  <Icon>
                    <FiCopy />
                  </Icon>
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.group}>
            <div>2. Nhập mã tham gia</div>
            <div className={classes.joinLinkContainer}>
              <div>
                <span>{fillRoomName(roomId)}</span>
                <Button>
                  <Icon>
                    <FiCopy />
                  </Icon>
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.lineGroup}>
            <span></span>
            <span>or</span>
            <span></span>
          </div>
          <div>
            <Button preIcon={<ImQrcode />}>Tham gia qua mã QR</Button>
          </div>
          <div className={classes.shareTitle}>
            <span>hoặc chia sẻ thông qua ...</span>
          </div>
          <div className={classes.share}>
            <Label>
              <Icon>
                <BsLink45Deg />
              </Icon>
            </Label>
            <Label>
              <Icon>
                <IoTabletLandscape />
              </Icon>
            </Label>
            <Label>
              <Icon>
                <HiMail />
              </Icon>
            </Label>
            <Label>
              <Icon>
                <GrList />
              </Icon>
            </Label>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <span className={classes.countBadge}>
          <Icon>
            <GrGroup />
          </Icon>
          <span>{listActiveUser.length}</span>
        </span>
        <div className={classes.controller}>
          <LoadingButton onClick={handleStartRoom}>Bắt đầu</LoadingButton>
          {listActiveUser.length === 0 && <h3>Chờ người khác tham gia ..</h3>}
          <div className={classes.playerList}>
            {listActiveUser.map((activeUser, index) => (
              <div className={classes.player} key={index}>
                <span className={classes.playerName}>
                  {activeUser.nickname}
                </span>
                <span className={classes.avatar}>
                  <img alt={activeUser.nickname} src={activeUser.avatar} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children, callback }) {
  return (
    <div className={classes.labelRoot} onClick={callback}>
      {children}
    </div>
  );
}

export default AdminLiveWaitingRoom;
