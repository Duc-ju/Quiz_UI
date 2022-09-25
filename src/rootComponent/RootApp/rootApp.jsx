import React from "react";
import classes from "./rootApp.module.css";
import Header from "../Header";
import RouterMain from "../RouterMain/routerMain";
import Footer from "../Footer";
import NotificationContainer from "../NotificationContainer";
import ModalContainer from "../ModalContainer";
import { NotificationProvider } from "../NotificationContainer/NotificationContext/notificationContext";
import { ModalProvider } from "../ModalContainer/ModalContext/modalContext";
import { BrowserRouter } from "react-router-dom";
import LeftNav from "../LeftNav";

function RootApp(props) {
  return (
    <NotificationProvider>
      <ModalProvider>
        <BrowserRouter>
          <section className={classes.root}>
            <section className={classes.leftNav}>
              <LeftNav />
            </section>
            <section className={classes.mainContent}>
              <Header />
              <RouterMain />
              <Footer />
            </section>
            <NotificationContainer />
            <ModalContainer />
          </section>
        </BrowserRouter>
      </ModalProvider>
    </NotificationProvider>
  );
}

export default RootApp;
