import React from "react";
import classes from "./adminLiveWaitingRoom.module.css";
import Icon from "../../commonComponents/Icon";
import { GrGroup } from "@react-icons/all-files/gr/GrGroup";
import LoadingButton from "../../commonComponents/LoadingButton";
import { Link } from "react-router-dom";
import Button from "../../commonComponents/Button";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { ImQrcode } from "@react-icons/all-files/im/ImQrcode";
import { BsLink45Deg } from "@react-icons/all-files/bs/BsLink45Deg";
import { IoTabletLandscape } from "@react-icons/all-files/io5/IoTabletLandscape";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { GrList } from "@react-icons/all-files/gr/GrList";

function AdminLiveWaitingRoom(props) {
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
                <span>522780</span>
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
          <span>0</span>
        </span>
        <div className={classes.controller}>
          <LoadingButton>Bắt đầu</LoadingButton>
          <h3>Chờ người khác tham gia ..</h3>
          <div className={classes.playerList}>
            {new Array(8).fill(null).map((x, index) => (
              <div className={classes.player} key={index}>
                <span className={classes.playerName}>Đức Ju</span>
                <span className={classes.avatar}>
                  <img
                    alt={"avatar"}
                    src={
                      "https://cf.quizizz.com/join/img/avatars/tablet_sm/monster33.png"
                    }
                  />
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
