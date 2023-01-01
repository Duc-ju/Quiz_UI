import React, { useEffect, useState } from "react";
import classes from "./joinPage.module.css";
import Button from "../../commonComponents/Button";
import { FcPlus } from "@react-icons/all-files/fc/FcPlus";
import SliderLesson from "../SliderLession";
import LessonPopup from "./LessonPopup";
import categoryApi from "../../api/categoryApi";

function JoinPage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryApi
      .getAll()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

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
        {categories.map((category) => (
          <SliderLesson
            key={category.id}
            showPopup={true}
            title={category.name}
            lessons={category.lessons}
            Popup={LessonPopup}
          />
        ))}
      </div>
    </section>
  );
}

export default JoinPage;
