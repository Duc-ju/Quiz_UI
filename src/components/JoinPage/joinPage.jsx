import React from "react";
import classes from "./joinPage.module.css";
import Button from "../../commonComponents/Button";
import { FcPlus } from "@react-icons/all-files/fc/FcPlus";
import SliderLesson from "../SliderLession";
import LessonPopup from "./LessonPopup";

function JoinPage(props) {
  return (
    <section className={classes.root}>
      <div className={classes.top}>
        <div className={classes.topContainer}>
          <div className={classes.topLeft}>
            <div className={classes.outline}>
              <input type={"text"} name={"room-code"} />
              <Button>THAM GIA</Button>
            </div>
          </div>
          <div className={classes.topRight}>
            <div className={classes.tag}>
              <Button preIcon={<FcPlus />}>Đức đây</Button>
            </div>
            <span className={classes.action}>
              <span>Chỉnh sửa hồ sơ</span>
              <span>●</span>
              <span>Xem hoạt động</span>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.lessonContainer}>
        <SliderLesson popup={<LessonPopup />} title={"Khám phá theo chủ đề"} />
        <SliderLesson popup={<LessonPopup />} title={"Mathematics"} />
      </div>
    </section>
  );
}

export default JoinPage;
