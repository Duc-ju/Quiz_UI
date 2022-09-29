import React from "react";
import classes from "./roomController.module.css";
import Button from "../../commonComponents/Button";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { FaMusic } from "@react-icons/all-files/fa/FaMusic";
import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import { BsFullscreen } from "@react-icons/all-files/bs/BsFullscreen";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import { RiArrowGoForwardFill } from "@react-icons/all-files/ri/RiArrowGoForwardFill";

function RoomController(props) {
  const { children } = props;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.timeProgress}>
          <span />
        </div>
        <div className={classes.left}>
          <Button>
            <IoClose />
          </Button>
          <Button>
            <FaMusic />
          </Button>
          <Button>
            <AiFillSetting />
          </Button>
        </div>
        <div className={classes.right}>
          <Button>
            <FaMedal />
          </Button>
          <Button>
            <BsFullscreen />
          </Button>
        </div>
      </div>
      <div className={classes.main}>{children}</div>
      <div className={classes.footer}>
        <div className={classes.left}></div>
        <div className={classes.right}>
          <Button>
            <RiArrowGoBackFill />
          </Button>
          <Button>
            <RiArrowGoForwardFill />
          </Button>
        </div>
        <div className={classes.correct}>
          <div className={classes.correctContent}>
            <span>Điểm trả lời</span>
            <span>+960</span>
          </div>
        </div>
        <div className={classes.wrong}>
          <div className={classes.wrongContent}>
            <span>Câu trả lời chưa chính xác</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomController;
