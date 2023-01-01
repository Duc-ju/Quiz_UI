import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import RoomController from "../../../components/RoomController";
import WaitingRoom from "../../../components/WatingRoom";
import PlayingRoom from "../../../components/PlayingRoom";
import ScoredRoom from "../../../components/ScoredRoom/scoredRoom";
import RoomProvider from "./context/roomProvider";

function RoomRouter(props) {
  return (
    <RoomProvider>
      <RoomController>
        <Routes>
          <Route path={"/pre-game"} element={<WaitingRoom />} />
          <Route
            path={"/playing-game/:answerTimeId"}
            element={<PlayingRoom />}
          />
          <Route path={"/scored-game/:answerTimeId"} element={<ScoredRoom />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </RoomController>
    </RoomProvider>
  );
}

export default RoomRouter;
