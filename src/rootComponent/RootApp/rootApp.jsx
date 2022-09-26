import React from "react";
import classes from "./rootApp.module.css";
import AdminHeader from "../admin/AdminHeader";
import AdminRouter from "../admin/AdminRouter";
import Footer from "../common/Footer";
import NotificationContainer from "../common/NotificationContainer";
import ModalContainer from "../common/ModalContainer";
import { NotificationProvider } from "../common/NotificationContainer/NotificationContext/notificationContext";
import { ModalProvider } from "../common/ModalContainer/ModalContext/modalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNav from "../admin/LeftNav";
import JoinHeader from "../join/Joinheader";
import JoinRouter from "../join/JoinRouter/joinRouter";

function RootApp(props) {
  return (
    <NotificationProvider>
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
            </Routes>
            <NotificationContainer />
            <ModalContainer />
          </section>
        </BrowserRouter>
      </ModalProvider>
    </NotificationProvider>
  );
}

export default RootApp;
