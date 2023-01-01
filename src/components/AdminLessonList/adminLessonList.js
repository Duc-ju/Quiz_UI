import React, { useEffect, useState } from "react";
import classes from "./adminLessonList.module.css";
import Icon from "../../commonComponents/Icon";
import Button from "../../commonComponents/Button";
import { AiFillFolderAdd } from "@react-icons/all-files/ai/AiFillFolderAdd";
import Select from "react-select";
import { HiOutlineMenu } from "@react-icons/all-files/hi/HiOutlineMenu";
import { FaShare } from "@react-icons/all-files/fa/FaShare";
import { useNavigate } from "react-router";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { AiOutlineImport } from "@react-icons/all-files/ai/AiOutlineImport";
import { BiHistory } from "@react-icons/all-files/bi/BiHistory";
import { FcLike } from "@react-icons/all-files/fc/FcLike";
import { RiDraftLine } from "@react-icons/all-files/ri/RiDraftLine";
import mergeClassNames from "merge-class-names";
import { IoBag } from "@react-icons/all-files/io5/IoBag";
import lessonApi from "../../api/lessonApi";

const options = [
  { value: "latest", label: "Sắp xếp theo: Gần đây nhất" },
  { value: "oldest", label: "Sắp xếp theo: Cũ nhất" },
];

const menuList = [
  {
    icon: IoBag,
    label: "Tất cả nội dung của tôi",
    quantity: 7,
    active: true,
  },
  {
    icon: BsFillPersonFill,
    label: "Được tạo bởi tôi",
    quantity: 5,
  },
  {
    icon: AiOutlineImport,
    label: "Đã import",
    quantity: 0,
  },
  {
    icon: BiHistory,
    label: "Trước đây đã sử dụng",
    quantity: 2,
  },
  {
    icon: FcLike,
    label: "Được tôi thích",
    quantity: 0,
  },
  {
    icon: RiDraftLine,
    label: "Bản nháp",
    quantity: 0,
  },
];

const lessonList = [
  {
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/84/c5/f8/d9c15f3b5a0091641924845c26667d22.jpg",
    draf: false,
    type: "Quiz",
    title: "10 vạn câu hỏi vì sao",
    numberOfQuestions: 3,
    countDate: 2,
    grade: "1st - 5th",
  },
  {
    image:
      "https://vietjack.com/giai-bai-tap-dia-li-8/images/ly-thuyet-vi-tri-dia-li-dia-hinh-va-khoang-san-00.PNG",
    draf: true,
    type: "Lesson",
    title: "Bài tập địa lý lớp 8",
    numberOfQuestions: 8,
    countDate: 12,
    grade: "6th - 9th",
  },
  {
    image:
      "https://korealink.edu.vn/cms/static/site/korealink/uploads/ckeditor/images.thumb.e18f9409-d491-4d51-93d2-dae0910270d2.jpg",
    draf: false,
    type: "Lesson",
    title: "Những câu đố tiếng Việt hay",
    numberOfQuestions: 12,
    countDate: 4,
    grade: "1st - 5th",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    draf: false,
    type: "Lesson",
    title: "Luyện tập toán 8",
    numberOfQuestions: 12,
    countDate: 7,
    grade: "8th",
  },
];

function AdminLessonList(props) {
  const [lessons, setLessons] = useState([]);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFetching(true);
    lessonApi
      .getAll()
      .then((response) => {
        setLessons(response.data);
      })
      .catch((e) => console.error(e))
      .finally(() => setFetching(false));
  }, []);

  const handleSelectLesson = (id) => {
    navigate(`/admin/quiz/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftMenu}>
        <div className={classes.library}>
          <h2>Thư viện của tôi</h2>
          <div className={classes.categories}>
            {menuList.map((menuItem, index) => (
              <div
                className={mergeClassNames(
                  classes.category,
                  menuItem.active ? classes.active : ""
                )}
                key={index}
              >
                <Icon>
                  <menuItem.icon />
                </Icon>
                <span>{menuItem.label}</span>
                <span>{menuItem.quantity}</span>
              </div>
            ))}
          </div>
          <h3 className={classes.albumTitle}>Bộ sưu tập</h3>
          <div className={classes.albumContainer}>
            <Button preIcon={<AiFillFolderAdd />} fullWidth={true}>
              Bộ sưu tập mới
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.header}>
          <div className={classes.buttonGroup}>
            <Button>Tất cả</Button>
            <Button>Quizz</Button>
            <Button>Những bài học</Button>
          </div>
          <div className={classes.sortOption}>
            <Select options={options} />
          </div>
        </div>
        <div className={classes.lessons}>
          {lessons.map((lesson, index) => (
            <div
              className={classes.lesson}
              key={index}
              onClick={() => handleSelectLesson(lesson.id)}
            >
              <div className={classes.questionImage} key={index}>
                {lesson.image && (
                  <img alt={"lesson-images"} src={lesson.image} />
                )}
                {!lesson.image && (
                  <div className={classes.emptyImage}>
                    <img
                      src={
                        "https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png"
                      }
                    />
                  </div>
                )}
              </div>
              <div className={classes.lessonContent}>
                <div className={classes.labelList}>
                  <span className={classes.type}>{lesson.type}</span>
                  {/*{lesson.draf && (*/}
                  {/*  <span className={classes.label}>Bản nháp</span>*/}
                  {/*)}*/}
                </div>
                <h3>{lesson.title}</h3>
                <div className={classes.infoList}>
                  <div>
                    <Icon>
                      <HiOutlineMenu />
                    </Icon>
                    <span>{`${lesson.numberOfQuestion} câu hỏi`}</span>
                  </div>
                  {/*<div>*/}
                  {/*  <Icon>*/}
                  {/*    <FaGraduationCap />*/}
                  {/*  </Icon>*/}
                  {/*  <span>{lesson.grade}</span>*/}
                  {/*</div>*/}
                  {/*<div>*/}
                  {/*  <Icon>*/}
                  {/*    <GiBookshelf />*/}
                  {/*  </Icon>*/}
                  {/*  <span>Education</span>*/}
                  {/*</div>*/}
                </div>
                <div className={classes.lessonFooter}>
                  <div>
                    <div>
                      <span className={classes.avatar}>
                        <img
                          src={
                            "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.18169-1/12027587_1617365158530569_2122292052928066527_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aWJK9PTWdB0AX-gZZ3W&_nc_ht=scontent-hkg4-2.xx&oh=00_AfBPqAFCt3vLd3FbWD5ndLksvIpoSRD5AqtgDhmaxPGYWw&oe=63D5D000"
                          }
                          alt={""}
                        />
                      </span>
                      <span>Đức đây!</span>
                    </div>
                    <div>&#x2022;</div>
                    <div>2 ngày trước</div>
                  </div>
                  <div>
                    <Button endIcon={<FaShare />}>Chia sẻ</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminLessonList;
