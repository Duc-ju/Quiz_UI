import React, { useContext } from "react";
import classes from "./notificationContainer.module.css";
import Icon from "../../../commonComponents/Icon";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { Link } from "react-router-dom";
import { NotificationContext } from "../context/NotificationProvider";
import mergeClassNames from "merge-class-names";

function NotificationContainer(props) {
  const { notifications, open, setOpen } = useContext(NotificationContext);
  const rootClass = mergeClassNames(classes.root, open ? classes.open : "");
  return (
    <section className={rootClass}>
      <div className={classes.container}>
        {notifications &&
          notifications.map((notification) => (
            <Link
              className={mergeClassNames(
                classes.notification,
                notification.userRead ? "" : classes.userNotRead
              )}
              key={notification.id}
              to={notification.redirectUrl}
            >
              <div className={classes.left}>
                <Icon>
                  <FcInfo />
                </Icon>
              </div>
              <div className={classes.right}>{notification.message}</div>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default NotificationContainer;
