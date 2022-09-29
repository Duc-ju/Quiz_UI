import React from "react";
import classes from "./question.module.css";
import Icon from "../../../commonComponents/Icon";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import mergeClassNames from "merge-class-names";
import { toast } from "react-toastify";

function Question(props) {
  const { className } = props;
  const mergedClass = mergeClassNames(classes.root, className);
  const handleOpenQuestion = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
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
