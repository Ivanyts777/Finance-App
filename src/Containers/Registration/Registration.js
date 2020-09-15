import React, { useState } from "react";
import styles from "./Registration.module.css";
import googleIcon from "../../Components/SVG/gicon.png";
import {
  userLogin,
  createNewUser,
} from "../../Components/Operations/operationsAuth";
import { useDispatch } from "react-redux";
import { Email, LockClose, Account } from "../../Components/SVG/sprite";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeRegister, setTypeRegister] = useState("");

  const dispatch = useDispatch();

  const handleInputFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleInputLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleInputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleTypeRegister = () => {
    setTypeRegister((currentState) => {
      if (currentState) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeRegister) {
      const regParams = (firstName, lastName, email, password) => ({
        email: email,
        password: password,
        name: {
          fullName: `${firstName} ${lastName}`,
          firstName: firstName,
          lastName: lastName,
        },
      });
      dispatch(createNewUser(regParams(firstName, lastName, email, password)));
    } else {
      const loginParams = (email, password) => ({
        email: email,
        password: password,
      });
      dispatch(userLogin(loginParams(email, password)));
    }
  };

  return (
    <div className={styles.authWrapper}>
      <form onSubmit={handleSubmit}>
        {/* - FORM START - */}

        <>
          {/* - FIRST NAME IMPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Account />
            </div>
            <input
              className={styles.input}
              maxLength="25"
              id="name"
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleInputFirstName}
              required
              autoFocus
            />
          </div>

          {/* - LAST NAME INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Account />
            </div>
            <input
              className={styles.input}
              maxLength="25"
              id="lastName"
              placeholder="Last name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleInputLastName}
              required
            />
          </div>

          {/* - EMAIL INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Email />
            </div>
            <input
              id="email"
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputEmail}
              required
              autoFocus
            />
          </div>

          {/* - PASSWORD INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <LockClose />
            </div>
            <input
              className={styles.input + " " + styles.inputPassword}
              placeholder="Password"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleInputPassword}
              minLength="6"
              required
            />
          </div>
        </>

        <p className={styles.googleDescr}>Autorization with Google:</p>

        {/* - GOOGLE BUTTON - */}
        <button
          type="button"
          /*onClick={googleSignIn}*/ className={styles.google}
        >
          <img
            className={styles.googleIcon}
            src={googleIcon}
            alt="google-icon"
          />
          Google
        </button>

        {/* - BUTTONS LOGIN/REGISTER - */}
        <div className={styles.authBtnWrapper}>
          <button className={styles.buttonLogin} type="submit">
            Login
          </button>
          <button
            className={styles.buttonRegister}
            type="button"
            onClick={handleTypeRegister}
          >
            Registration
          </button>
        </div>

        {/* - FORM END - */}
      </form>
    </div>
  );
};

export default Registration;
