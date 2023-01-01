import React, { useEffect, useState } from "react";
import classes from "./adminPage.module.css";
import Icon from "../../commonComponents/Icon";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLesson from "../SliderLession";
import categoryApi from "../../api/categoryApi";

function AdminPage(props) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

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
      <div className={classes.topPage}>
        <h2 className={classes.title}>Bạn sẽ dạy gì hôm nay</h2>
        <div className={classes.inputContainer}>
          <input
            type={"text"}
            name={"search"}
            placeholder={"Tìm kiếm quiz về bất kỳ chủ đề nào"}
          />
          <Icon>
            <AiOutlineRight />
          </Icon>
        </div>
        <div className={classes.listSubject}>
          <Slider {...settings}>
            {categories.map((category) => (
              <SubjectItem
                key={category.id}
                src={category.image}
                alt={category.name}
                label={category.name}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={classes.mainPage}>
        {categories.map((category) => (
          <SliderLesson
            key={category.id}
            showPopup={false}
            title={category.name}
            lessons={category.lessons}
          />
        ))}
      </div>
    </section>
  );
}

function SubjectItem(props) {
  const { src, alt, label, ...restProps } = props;
  return (
    <li {...restProps} className={classes.subjectRoot}>
      <div className={classes.subjectContainer}>
        <div className={classes.subjectImageContainer}>
          <img src={src} alt={alt} className={classes.subjectImage} />
        </div>
        <span className={classes.subjectLabel}>{label}</span>
      </div>
    </li>
  );
}

export default AdminPage;
