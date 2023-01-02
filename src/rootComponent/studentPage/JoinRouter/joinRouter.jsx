import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import StudentHomePage from "../../../components/StudentHomePage";
import Login from "../../../components/Login";

function JoinRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<StudentHomePage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Login />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default JoinRouter;
