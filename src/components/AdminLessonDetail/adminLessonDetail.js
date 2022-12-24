import React, { useContext, useEffect, useState } from "react";
import classes from "./adminLessonDetail.module.css";
import Button from "../../commonComponents/Button";
import Icon from "../../commonComponents/Icon";
import { AiOutlineCopy } from "@react-icons/all-files/ai/AiOutlineCopy";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { AiOutlinePrinter } from "@react-icons/all-files/ai/AiOutlinePrinter";
import { AiOutlineSetting } from "@react-icons/all-files/ai/AiOutlineSetting";
import { FiTarget } from "@react-icons/all-files/fi/FiTarget";
import { BsPlay } from "@react-icons/all-files/bs/BsPlay";
import { IoTabletLandscape } from "@react-icons/all-files/io5/IoTabletLandscape";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder";
import { FcLike } from "@react-icons/all-files/fc/FcLike";
import { AiOutlineFolderOpen } from "@react-icons/all-files/ai/AiOutlineFolderOpen";
import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import { AiOutlineControl } from "@react-icons/all-files/ai/AiOutlineControl";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import { AiOutlineOrderedList } from "@react-icons/all-files/ai/AiOutlineOrderedList";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { BsPlayFill } from "@react-icons/all-files/bs/BsPlayFill";
import { IoCheckboxOutline } from "@react-icons/all-files/io5/IoCheckboxOutline";
import { BsCheckCircle } from "@react-icons/all-files/bs/BsCheckCircle";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import { useParams } from "react-router-dom";
import lessonApi from "../../api/lessonApi";
import { toast } from "react-toastify";
import RoomLoading from "../../commonComponents/RoomLoading";
import { AuthContext } from "../../rootComponent/context/AuthProvider";
import lessonLikeApi from "../../api/lessonLikeApi";

function AdminLessonDetail(props) {
  const [lesson, setLesson] = useState(null);
  const [fetching, setFetching] = useState(false);
  const params = useParams();
  useEffect(() => {
    setFetching(true);
    lessonApi
      .getById(params.lessonId)
      .then((response) => {
        setLesson(response.data);
      })
      .catch(() => {
        toast.error("Đã xảy ra lỗi khi tải bài học!");
      })
      .finally(() => setFetching(false));
  }, [params.lessonId]);
  if (!lesson && fetching) return <RoomLoading />;
  if (!lesson) return null;
  return <AdminLessonDetailBody lesson={lesson} setLesson={setLesson} />;
}

function AdminLessonDetailBody(props) {
  const { lesson, setLesson } = props;
  const { user } = useContext(AuthContext);
  const liked = !!lesson.lessonLikes.find(
    (lessonLike) => lessonLike.userId === user.id
  );
  const handleToggleLike = () => {
    const check = lesson.lessonLikes.find(
      (lessonLike) => lessonLike.userId === user.id
    );
    if (check) {
      lessonLikeApi
        .removeLike(check, lesson.id)
        .then((response) => {
          setLesson((lesson) => ({
            ...lesson,
            lessonLikes: response.data,
          }));
        })
        .catch((e) => {
          toast.error("Có lỗi xảy ra");
          console.error(e);
        });
    } else {
      lessonLikeApi
        .addLike(user.id, lesson.id)
        .then((response) => {
          setLesson((lesson) => ({
            ...lesson,
            lessonLikes: response.data,
          }));
        })
        .catch((e) => {
          toast.error("Có lỗi xảy ra");
          console.error(e);
        });
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.topBlock}>
        <div className={classes.topContainer}>
          <div className={classes.image}>
            <img
              src={
                "\thttps://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
              }
              alt={""}
            />
          </div>
          <div className={classes.info}>
            <div className={classes.divide}>
              <div>
                <span>Quizz</span>
              </div>
              <div className={classes.actionGroup}>
                <Button>
                  <Icon>
                    <AiOutlineCopy />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <AiOutlineDelete />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <AiOutlinePrinter />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <AiOutlineSetting />
                  </Icon>
                </Button>
              </div>
            </div>
            <h3>{lesson.title}</h3>
            <div className={classes.statistic}>
              <div>
                <Icon>
                  <FiTarget />
                </Icon>
                <span>86% Điểm trung bình</span>
              </div>
              <div>&#x2022;</div>
              <div>
                <Icon>
                  <BsPlay />
                </Icon>
                <span>{`${lesson.numberOfPlayed} lần chơi`}</span>
              </div>
            </div>
            <div className={classes.statistic}>
              <div>
                <Icon>
                  <FaGraduationCap />
                </Icon>
                <span>1st - 5th lớp</span>
              </div>
              <div>&#x2022;</div>
              <div>
                <Icon>
                  <IoTabletLandscape />
                </Icon>
                <span>Education</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.topFooter}>
          <div className={classes.userInfo}>
            <div>
              <img
                src={
                  "https://lh3.googleusercontent.com/a/ALm5wu07NvvHlucCw5o2i9EK_IE44wcRCOjjVfib-XKNQg=s96-c"
                }
                alt={""}
              />
            </div>
            <div>
              <span>Đức Đây!</span>
              <span>2 ngày</span>
            </div>
          </div>
          <div className={classes.buttonAction}>
            <Button preIcon={<BsDownload />}>Bảng tính</Button>
            {!liked && (
              <Button
                onClick={handleToggleLike}
                preIcon={<FcLikePlaceholder />}
              >
                {lesson.lessonLikes.length > 0 ? lesson.lessonLikes.length : ""}
              </Button>
            )}
            {liked && (
              <Button onClick={handleToggleLike} preIcon={<FcLike />}>
                {lesson.lessonLikes.length}
              </Button>
            )}
            <Button preIcon={<AiOutlineFolderOpen />}>Lưu</Button>
            <Button preIcon={<AiOutlineShareAlt />}>Chia sẻ</Button>
            <Button>Chỉnh sửa</Button>
          </div>
        </div>
      </div>
      <div className={classes.controlBlock}>
        <div>
          <div>
            <Icon>
              <AiOutlineControl />
            </Icon>
          </div>
          <div>
            <span>Giáo viên điều khiển</span>
            <span>Host quiz</span>
          </div>
        </div>
        <div>
          <div>
            <Icon>
              <AiOutlineClockCircle />
            </Icon>
          </div>
          <div>
            <span>Học không đồng bộ</span>
            <span>Giao bài tập về nhà</span>
          </div>
        </div>
      </div>
      <div className={classes.questionHeaderBlock}>
        <div>
          <Icon>
            <AiOutlineOrderedList />
          </Icon>
          <span>{`${lesson.numberOfQuestion} câu hỏi`}</span>
        </div>
        <div>
          <Button preIcon={<AiOutlineEye />}>Hiển thị đấp án</Button>
          <Button preIcon={<BsPlayFill />}>Hãy thử bài kiểm tra này</Button>
        </div>
      </div>
      <div className={classes.questionList}>
        {lesson.questions.map((question, index) => (
          <div className={classes.question} key={question.id}>
            <div className={classes.questionHeader}>
              <div>
                <Icon>
                  <IoCheckboxOutline />
                </Icon>
                <span>{`${index + 1}. Đa lựa chọn`}</span>
              </div>
              <div>
                <div className={classes.label}>
                  <Icon>
                    <AiOutlineClockCircle />
                  </Icon>
                  <span>{`${question.duration} giây`}</span>
                </div>
                <div className={classes.label}>
                  <Icon>
                    <BsCheckCircle />
                  </Icon>
                  <span>{`${question.point} điểm`}</span>
                </div>
              </div>
            </div>
            <h3>{`Q. ${question.title}`}</h3>
            <div className={classes.br}>
              <span>lựa chọn trả lời</span>
            </div>
            <div className={classes.answerList}>
              {question.answers.map((answer, index) => (
                <div key={answer.id} className={classes.answer}>
                  <Icon>
                    <FaDotCircle />
                  </Icon>
                  <span>{answer.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminLessonDetail;
