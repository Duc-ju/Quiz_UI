import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../../../components/AdminPage";
import NotFoundPage from "../../common/NotFoundPage";
import AdminLessonList from "../../../components/AdminLessonList";
import AdminReportList from "../../../components/AdminReportList";
import AdminLessonDetail from "../../../components/AdminLessonDetail";

function AdminRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<AdminPage />} />
      <Route path={"/private"} element={<AdminLessonList />} />
      <Route path={"/quiz/:lesssonId"} element={<AdminLessonDetail />} />
      <Route path={"/reports"} element={<AdminReportList />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AdminRouter;
