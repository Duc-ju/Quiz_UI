import React from "react";
import classes from "./app.module.css";
import AdminHeader from "../admin/AdminHeader";
import AdminRouter from "../admin/AdminRouter";
import Footer from "../common/Footer";
import NotificationContainer from "../common/NotificationContainer";
import ModalContainer from "../common/ModalContainer";
import { ModalProvider } from "../common/ModalContainer/ModalContext/modalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LeftNav from "../admin/LeftNav";
import JoinHeader from "../join/Joinheader";
import JoinRouter from "../join/JoinRouter/joinRouter";
import NotFoundPage from "../common/NotFoundPage";
import RoomRouter from "../room/RoomRouter";
import AuthProvider from "../context/AuthProvider";
import AdminLiveRoomRouter from "../liveRoom/AdminLiveRoomRouter";

function App(props) {
  return (
    <ModalProvider>
      <AuthProvider>
        <BrowserRouter>
          <section className={classes.root}>
            <Routes>
              <Route path={"/"} element={<Navigate to={"/admin/home"} />} />
              <Route
                path={"/admin/quizz/:roomId/*"}
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
              <Route path={"/join/game/:lessonId/*"} element={<RoomRouter />} />
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

export default App;
