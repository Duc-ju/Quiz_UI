import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../common/NotFoundPage";
import JoinPage from "../../../components/JoinPage";

function JoinRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<JoinPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default JoinRouter;
