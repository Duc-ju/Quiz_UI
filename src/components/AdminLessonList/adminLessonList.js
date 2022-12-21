import React from "react";
import classes from "./adminLessonList.module.css";
import Icon from "../../commonComponents/Icon";
import Button from "../../commonComponents/Button";
import { AiFillFolderAdd } from "@react-icons/all-files/ai/AiFillFolderAdd";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import Select from "react-select";
import { HiOutlineMenu } from "@react-icons/all-files/hi/HiOutlineMenu";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { GiBookshelf } from "@react-icons/all-files/gi/GiBookshelf";
import { FaShare } from "@react-icons/all-files/fa/FaShare";

const options = [
  { value: "latest", label: "Sắp xếp theo: Gần đây nhất" },
  { value: "oldest", label: "Sắp xếp theo: Cũ nhất" },
];

function AdminLessonList(props) {
  return (
    <div className={classes.root}>
      <div className={classes.leftMenu}>
        <div className={classes.library}>
          <h2>Thư viện của tôi</h2>
          <div className={classes.categories}>
            {new Array(4).fill(null).map((x, index) => (
              <div className={classes.category} key={index}>
                <Icon>
                  <CgMenuGridO />
                </Icon>
                <span>Tất cả nội dung của tôi</span>
                <span>4</span>
              </div>
            ))}
          </div>
          <h3 className={classes.albumTitle}>Bộ sưu tập</h3>
          <div className={classes.albumContainer}>
            <Button preIcon={<AiFillFolderAdd />}>Bộ sưu tập mới</Button>
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
          {new Array(5).fill(null).map((x, index) => (
            <div className={classes.lesson}>
              <div className={classes.questionImage} key={index}>
                <img
                  alt={"lesson-images"}
                  src={
                    "https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                  }
                />
              </div>
              <div className={classes.lessonContent}>
                <div className={classes.labelList}>
                  <span className={classes.type}>QUIZZ</span>
                  <span className={classes.label}>Bản nháp</span>
                </div>
                <h3>10 vạn câu hỏi vì sao</h3>
                <div className={classes.infoList}>
                  <div>
                    <Icon>
                      <HiOutlineMenu />
                    </Icon>
                    <span>3 câu hỏi</span>
                  </div>
                  <div>
                    <Icon>
                      <FaGraduationCap />
                    </Icon>
                    <span>1st - 5th grade</span>
                  </div>
                  <div>
                    <Icon>
                      <GiBookshelf />
                    </Icon>
                    <span>Education</span>
                  </div>
                </div>
                <div className={classes.lessonFooter}>
                  <div>
                    <div>
                      <span className={classes.avatar}>
                        <img src={""} alt={""} />
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
