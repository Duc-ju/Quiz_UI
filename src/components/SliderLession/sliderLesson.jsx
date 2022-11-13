import classes from "./sliderLesson.module.css";
import Icon from "../../commonComponents/Icon";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import Button from "../../commonComponents/Button";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Tag from "../../commonComponents/Tag";

function SliderLesson(props) {
  const { lessons = [], title, to, ...restProps } = props;
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className={classes.lessonRoot} {...restProps}>
      <div className={classes.lessonTitle}>
        <div className={classes.left}>
          <Icon>
            <AiFillStar />
          </Icon>
          <h2>{title}</h2>
        </div>
        <div className={classes.right}>
          <Button to={to} endIcon={<AiOutlineRight />}>
            Xem thêm
          </Button>
        </div>
      </div>
      <div className={classes.listLesson}>
        <Slider {...settings}>
          {new Array(10).fill(null).map((current, index) => (
            <Lesson
              key={index}
              src={
                "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/4bcf5a95-a02f-417d-9cff-49d2c4d10f25?w=400&h=400"
              }
              alt={"Quiz image"}
              to={"/lesson1"}
              type={"QUIZZ"}
              isNew={true}
              name={"Vòng quanh thế giới"}
              numberOfQuestion={10}
              numberOfPlayed={160}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Lesson(props) {
  const {
    src,
    alt,
    to,
    type,
    isNew,
    name,
    numberOfQuestion,
    numberOfPlayed,
    ...restProps
  } = props;
  return (
    <div className={classes.lessonRoot} {...restProps}>
      <Link to={to} className={classes.lessonContainer}>
        <div className={classes.lessonImageContainer}>
          <img src={src} alt={alt} />
        </div>
        <div className={classes.lessonBody}>
          <div className={classes.tagContainer}>
            <Tag>QUIZZ</Tag>
          </div>
          <h3>Vòng quanh thế giới</h3>
        </div>
        <div className={classes.lessonFooter}>
          <span>8 câu hỏi</span>
          <span>•</span>
          <span>
            <span>{numberOfPlayed}</span> lần chơi
          </span>
        </div>
      </Link>
    </div>
  );
}

export default SliderLesson;
