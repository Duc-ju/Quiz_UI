import React from "react";
import classes from "./playingRoom.module.css";

function PlayingRoom(props) {
  return (
    <section className={classes.root}>
      <div className={classes.question}>
        <h2>
          Xây một bức tường hết 1015 viên gạch, hỏi xây 4 bức tường như thế hết
          bao nhiêu viên gạch
        </h2>
      </div>
      <div className={classes.answers}>
        <Answer answer={"1015 x 4 = 4040 viên gạch"} />
        <Answer answer={"4 x 1015 = 4060 viên gạch"} />
        <Answer answer={"1015 x 4 = 4060 viên gạch"} />
        <Answer answer={"1015 x 4 = 4060 viên gạch"} />
      </div>
    </section>
  );
}

function Answer(props) {
  const { answer } = props;
  return (
    <div className={classes.answer}>
      <span>{answer}</span>
    </div>
  );
}

export default PlayingRoom;
