import React, { useContext, useState } from "react";
import classes from "./loginBody.module.css";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router";
import * as validate from "../../../logic/validate";
import {
  handleChangeEmail,
  handleChangePassword,
} from "../../../logic/validate";
import LoadingButton from "../../../commonComponents/LoadingButton";
import { AuthContext } from "../../../rootComponent/context/AuthProvider";
import { login } from "../../../oauth2/oauth2Api";

function LoginBody(props) {
  const { setTab } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    login(email, password)
      .then((response) => console.log(response))
      .catch((e) => console.error(e));
  };

  const handleForgotPassword = () => {
    setTab(3);
  };
  return (
    <form className={classes.body} onSubmit={handleLogin}>
      <h3 className={classes.title}>Với các tài khoản mạng xã hội</h3>
      <div className={classes.social}>
        <div className={classes.googleButton}>
          <span className={classes.icon}>
            <BsGoogle />
          </span>
          <span>Google</span>
        </div>
        <div className={classes.facebookButton}>
          <span className={classes.icon}>
            <BsFacebook />
          </span>
          <span>Facebook</span>
        </div>
      </div>
      <div className={classes.br}>hoặc</div>
      <div className={classes.inputGroup}>
        <div className={classes.fieldLabel}>Email</div>
        <input
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
      <div className={classes.forgotPassword} onClick={handleForgotPassword}>
        Quên mật khẩu
      </div>
      <LoadingButton
        className={classes.loginButton}
        type={"submit"}
        fullWidth={true}
        fetching={fetching}
      >
        Đăng nhập
      </LoadingButton>
    </form>
  );
}

export default LoginBody;
