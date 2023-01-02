import React from "react";
import classes from "./appRouter.module.css";
import AdminHeader from "../adminPage/AdminHeader";
import AdminRouter from "../adminPage/AdminRouter";
import Footer from "../common/Footer";
import NotificationContainer from "../common/NotificationContainer";
import ModalContainer from "../common/ModalContainer";
import { ModalProvider } from "../common/ModalContainer/ModalContext/modalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LeftNav from "../adminPage/LeftNav";
import JoinHeader from "../studentPage/Joinheader";
import JoinRouter from "../studentPage/JoinRouter/joinRouter";
import NotFoundPage from "../common/NotFoundPage";
import AuthProvider from "../context/AuthProvider";
import AdminLiveRoomRouter from "../adminLiveRoom/AdminLiveRoomRouter";
import PracticeRoomRouter from "../practiceRoom/PracticeRoomRouter";

function AppRouter(props) {
  return (
    <ModalProvider>
      <AuthProvider>
        <BrowserRouter>
          <section className={classes.root}>
            <Routes>
              <Route path={"/"} element={<Navigate to={"/admin/home"} />} />
              <Route
                path={"/admin/quiz-room/:roomId/*"}
                element={<AdminLiveRoomRouter />}
              />
              <Route
                path={"/admin/*"}
                element={
                  <>
                    <section className={classes.leftNav}>
                      <LeftNav />
                    </section>
                    <section className={classes.mainContent}>
                      <AdminHeader />
                      <AdminRouter />
                      <Footer />
                    </section>
                  </>
                }
              />
              <Route
                path={"/join/game/:lessonId/*"}
                element={<PracticeRoomRouter />}
              />
              <Route
                path={"/join/*"}
                element={
                  <>
                    <section className={classes.joinContent}>
                      <JoinHeader />
                      <JoinRouter />
                      <Footer />
                    </section>
                  </>
                }
              />
              <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
            <NotificationContainer />
            <ModalContainer />
          </section>
        </BrowserRouter>
      </AuthProvider>
    </ModalProvider>
  );
}

export default AppRouter;
