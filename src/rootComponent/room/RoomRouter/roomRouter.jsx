import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import RoomController from "../../../components/RoomController";
import WaitingRoom from "../../../components/WatingRoom";
import PlayingRoom from "../../../components/PlayingRoom";
import ScoredRoom from "../../../components/ScoredRoom/scoredRoom";

function RoomRouter(props) {
  return (
    <RoomController>
      <Routes>
        <Route path={"/pre-game"} element={<WaitingRoom />} />
        <Route path={"/playing-game"} element={<PlayingRoom />} />
        <Route path={"/scored-game"} element={<ScoredRoom />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </RoomController>
  );
}

export default RoomRouter;
