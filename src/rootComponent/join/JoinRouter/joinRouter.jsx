import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import JoinPage from "../../../components/JoinPage";
import Login from "../../../components/Login";

function JoinRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<JoinPage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Login />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default JoinRouter;
