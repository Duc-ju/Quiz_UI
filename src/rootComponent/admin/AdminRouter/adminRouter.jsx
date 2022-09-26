import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../../../components/AdminPage";
import NotFoundPage from "../../common/NotFoundPage";

function AdminRouter(props) {
  return (
    <Routes>
      <Route path={"/"} element={<AdminPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AdminRouter;
