import React, { useContext, useEffect, useState } from "react";
import classes from "./studentHomePage.module.css";
import Button from "../../commonComponents/Button";
import { FcPlus } from "@react-icons/all-files/fc/FcPlus";
import SliderLesson from "../SliderLession";
import LessonPopup from "./LessonPopup";
import categoryApi from "../../api/categoryApi";
import SliderShimmer from "../SliderLession/SliderShimmer";
import { AuthContext } from "../../rootComponent/private/AuthProvider";

function StudentHomePage(props) {
  const [categories, setCategories] = useState(null);
  const [fetching, setFetching] = useState(true);
  const { access } = useContext(AuthContext);

  useEffect(() => {
    categoryApi
      .getAll()
      .then((response) => {
        setCategories(response.data);
        setFetching(false);
      })
      .catch((e) => {
        toast.error("Có lỗi xảy ra!");
      })
      .finally();
  }, [access]);

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
        {categories &&
          categories.map((category) => (
            <SliderLesson
              key={category.id}
              showPopup={true}
              title={category.name}
              lessons={category.lessons}
              Popup={LessonPopup}
            />
          ))}
        {fetching &&
          new Array(4)
            .fill(null)
            .map((x, index) => <SliderShimmer key={index} />)}
      </div>
    </section>
  );
}

export default StudentHomePage;
