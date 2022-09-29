import React from "react";
import classes from "./app.module.css";
import AdminHeader from "../admin/AdminHeader";
import AdminRouter from "../admin/AdminRouter";
import Footer from "../common/Footer";
import NotificationContainer from "../common/NotificationContainer";
import ModalContainer from "../common/ModalContainer";
import { ModalProvider } from "../common/ModalContainer/ModalContext/modalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNav from "../admin/LeftNav";
import JoinHeader from "../join/Joinheader";
import JoinRouter from "../join/JoinRouter/joinRouter";
import NotFoundPage from "../common/NotFoundPage";
import RoomRouter from "../room/RoomRouter";

function App(props) {
  return (
    <ModalProvider>
      <BrowserRouter>
        <section className={classes.root}>
          <Routes>
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
            <Route path={"/join/game/*"} element={<RoomRouter />} />
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
    </ModalProvider>
  );
}

export default App;
