import classes from "./sliderLesson.module.css";
import Icon from "../../commonComponents/Icon";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import Button from "../../commonComponents/Button";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Tag from "../../commonComponents/Tag";
import { useContext } from "react";
import { ModalContext } from "../../rootComponent/common/ModalContainer/ModalContext/modalContext";

const lessonList = [
  {
    src: "https://quizizz.com/_media/quizzes/2da17524-b1e3-4126-be7d-0dbcd401a07b_400_400",
    name: "Grade 1 Fall Math Test 1",
    new: true,
    numberOfQuestion: 10,
    numberOfPlayed: 89,
  },
  {
    src: "https://quizizz.com/_media/quizzes/513dfa2d-884c-4d3e-9458-d63979c7122a_400_400",
    name: "TỨ GIÁC- HÌNH THANG CÂN",
    new: false,
    numberOfQuestion: 22,
    numberOfPlayed: 12,
  },
  {
    src: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/4bcf5a95-a02f-417d-9cff-49d2c4d10f25?w=400&h=400",
    name: "Vòng quanh thế giới",
    new: false,
    numberOfQuestion: 8,
    numberOfPlayed: 0,
  },
  {
    src: "https://quizizz.com/_media/quizzes/7a3e981b-8d06-4110-b375-25d53690695d_400_400",
    name: "Infinitives",
    new: false,
    numberOfQuestion: 20,
    numberOfPlayed: 1006,
  },
  {
    src: "https://quizizz.com/_media/quizzes/e6f5cf12-f8b6-4515-b6bd-da257d95db9c_400_400",
    name: "Những câu hỏi hack não",
    new: false,
    numberOfQuestion: 16,
    numberOfPlayed: 328,
  },
];

function SliderLesson(props) {
  const { lessons = [], title, to, popup, ...restProps } = props;
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const { openModal, setClassName } = useContext(ModalContext);
  const handleSelectLesson = (e) => {
    openModal(popup);
    setClassName(classes.modal);
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
          {lessonList.map((lesson, index) => (
            <Lesson
              key={index}
              src={lesson.src}
              alt={"Quiz image"}
              type={"QUIZZ"}
              isNew={true}
              name={lesson.name}
              numberOfQuestion={lesson.numberOfQuestion}
              numberOfPlayed={lesson.numberOfPlayed}
              onClick={handleSelectLesson}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function LinkLesson({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
}

function DivLesson({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
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
  const RootTag = to ? LinkLesson : DivLesson;
  return (
    <RootTag className={classes.lessonRoot} {...restProps}>
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
            <span>{numberOfPlayed}</span> lần trả lời
          </span>
        </div>
      </Link>
    </RootTag>
  );
}

export default SliderLesson;
