import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import RoomController from "../../../components/RoomController";
import ScoredRoom from "../../../components/ScoredRoom/scoredRoom";

function RoomRouter(props) {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <RoomController>
            <ScoredRoom />
          </RoomController>
        }
      />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoomRouter;
