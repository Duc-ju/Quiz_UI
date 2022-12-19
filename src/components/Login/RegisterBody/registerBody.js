import React, { useContext, useState } from "react";
import classes from "./registerBody.module.css";
import { useNavigate } from "react-router";
import * as validate from "../../../logic/validate";
import {
  handleChangeEmail,
  handleChangePassword,
} from "../../../logic/validate";
import LoadingButton from "../../../commonComponents/LoadingButton";
import { AuthContext } from "../../../rootComponent/context/AuthProvider";

function RegisterBody(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    let error = false;
    const validatePassword = validate.validatePassword(password);
    if (validatePassword) {
      setPasswordError(validatePassword);
      error = true;
    }
    const validateEmail = validate.validateEmail(email);
    if (validateEmail) {
      setEmailError(validateEmail);
      error = true;
    }
    if (error) return;
    // register logic here
  };

  return (
    <form className={classes.body} onSubmit={handleLogin}>
      <h3 className={classes.title}>Đăng ký và bắt đầu trải nghiệm ngay!</h3>
      <div className={classes.inputGroup}>
        <div className={classes.fieldLabel}>Email</div>
        <input
          type={"email"}
          className={classes.textInput}
          placeholder={"Email"}
          value={email}
          onChange={(e) =>
            handleChangeEmail(e, setEmail, emailError, setEmailError)
          }
        />
        {emailError && (
          <span className={classes.errorMessage}>{emailError}</span>
        )}
      </div>
      <div className={classes.inputGroup}>
        <div className={classes.fieldLabel}>Mật khẩu</div>
        <input
          type={"password"}
          className={classes.textInput}
          placeholder={"Mật khẩu"}
          value={password}
          onChange={(e) =>
            handleChangePassword(
              e,
              setPassword,
              passwordError,
              setPasswordError
            )
          }
        />
        {passwordError && (
          <span className={classes.errorMessage}>{passwordError}</span>
        )}
      </div>
      <LoadingButton
        className={classes.registerButton}
        fullWidth={true}
        type={"submit"}
        fetching={fetching}
      >
        Đăng ký
      </LoadingButton>
    </form>
  );
}

export default RegisterBody;
