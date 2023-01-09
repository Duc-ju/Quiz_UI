import React, { useContext, useEffect, useState } from "react";
import classes from "./studentHomePage.module.css";
import Button from "../../commonComponents/Button";
import { FcPlus } from "@react-icons/all-files/fc/FcPlus";
import SliderLesson from "../SliderLession";
import LessonPopup from "./LessonPopup";
import categoryApi from "../../api/categoryApi";
import SliderShimmer from "../SliderLession/SliderShimmer";
import { AuthContext } from "../../rootComponent/private/AuthProvider";
import fillRoomName from "../../logic/fillRoomName";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function StudentHomePage(props) {
  const [categories, setCategories] = useState(null);
  const [fetching, setFetching] = useState(true);
  const { access } = useContext(AuthContext);
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

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
  const handleJoinRoom = () => {
    navigate(`/join/asynchronous/${fillRoomName(room)}/pre-game/nickname`);
  };
  return (
    <section className={classes.root}>
      <div className={classes.top}>
        <div className={classes.topContainer}>
          <div className={classes.topLeft}>
            <div className={classes.outline}>
              <input
                type={"text"}
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
              <Button onClick={handleJoinRoom}>THAM GIA</Button>
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
