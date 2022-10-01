import React, { useContext } from "react";
import classes from "./question.module.css";
import Icon from "../../../commonComponents/Icon";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import mergeClassNames from "merge-class-names";
import { ModalContext } from "../../../rootComponent/common/ModalContainer/ModalContext/modalContext";
import QuestionDetail from "../QuestionDetail";

function Question(props) {
  const { className } = props;
  const mergedClass = mergeClassNames(classes.root, className);
  const { openModal } = useContext(ModalContext);
  const handleOpenQuestion = () => {
    openModal(<QuestionDetail />);
  };
  return (
    <div className={mergedClass} onClick={handleOpenQuestion}>
      <div className={classes.container}>
        <h2>
          <span>1.</span>
          <span> Từ trái nghĩa với mưa là:</span>
        </h2>
        <ul className={classes.answers}>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>gió</span>
          </li>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>bão</span>
          </li>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>khô</span>
          </li>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>nắng</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Question;
