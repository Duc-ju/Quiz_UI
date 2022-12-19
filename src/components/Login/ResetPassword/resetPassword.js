import React, { useState } from "react";
import classes from "./resetPassword.module.css";
import * as validate from "../../../logic/validate";
import { handleChangeEmail } from "../../../logic/validate";
import LoadingButton from "../../../commonComponents/LoadingButton";

function ResetPassword(props) {
  const { setTab } = props;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fetching, setFetching] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let error = false;
    const validateEmail = validate.validateEmail(email);
    if (validateEmail) {
      setEmailError(validateEmail);
      error = true;
    }
    if (error) return;
    // reset password logic here
  };

  return (
    <form className={classes.body} onSubmit={handleLogin}>
      <h3 className={classes.title}>Lấy lại mật khẩu</h3>
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
      <div className={classes.goBack} onClick={() => setTab(1)}>
        Quay lại trang đăng nhập
      </div>
      <LoadingButton
        className={classes.registerButton}
        fullWidth={true}
        type={"submit"}
        fetching={fetching}
      >
        Gửi yêu cầu
      </LoadingButton>
    </form>
  );
}

export default ResetPassword;
