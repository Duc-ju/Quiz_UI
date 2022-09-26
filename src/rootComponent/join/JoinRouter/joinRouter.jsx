import React from "react";
import { Route, Routes } from "react-router-dom";
import WaitingRoom from "../../../components/WatingRoom";
import PlayingRoom from "../../../components/PlayingRoom";
import ScoredRoom from "../../../components/ScoredRoom/scoredRoom";
import NotFoundPage from "../../common/NotFoundPage";
import JoinPage from "../../../components/JoinPage";

function JoinRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<JoinPage />} />
      <Route path={"/waiting-room"} element={<WaitingRoom />} />
      <Route path={"/playing-room"} element={<PlayingRoom />} />
      <Route path={"/scored-room"} element={<ScoredRoom />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default JoinRouter;
