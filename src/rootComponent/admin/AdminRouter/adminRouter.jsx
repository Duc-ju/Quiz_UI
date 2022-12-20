import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../../../components/AdminPage";
import NotFoundPage from "../../common/NotFoundPage";
import AdminLessonList from "../../../components/AdminLessonList";

function AdminRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<AdminPage />} />
      <Route path={"/private"} element={<AdminLessonList />} />
      <Route path={"/quiz/:lesssonId"} element={<AdminLessonList />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AdminRouter;
