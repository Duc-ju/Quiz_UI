import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import StudentHomePage from "../../../components/StudentHomePage";

function JoinRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<StudentHomePage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default JoinRouter;
