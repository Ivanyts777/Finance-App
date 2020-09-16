import React, { useState } from "react";
import styles from "./Registration.module.css";
import googleIcon from "../../Components/SVG/gicon.png";
import { createNewUser } from "../../Components/Operations/operationsAuth";
import { useDispatch } from "react-redux";
import { Email, LockClose, Account, Logo } from "../../Components/SVG/sprite";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const handleInput = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      createNewUser({
        name: `${userInfo.firstName} ${userInfo.lastName}`,
        email: userInfo.email,
        password: userInfo.password,
      })
    );
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.desktop_container}>
        <h2 className={styles.main_text2}>Finance App</h2>
      </div>
      <div className={styles.container}>
        <h2 className={styles.main_text}>Finance App</h2>
        <div className={styles.authWrapper}>
          <form onSubmit={handleRegister}>
            <div className={styles.wallet}>
              <Logo className={styles.logo} />
              <h1 className={styles.main}>Finance</h1>
            </div>
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
                value={userInfo.firstName}
                onChange={handleInput}
                required
                autoFocus
              />
            </div>
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
                value={userInfo.lastName}
                onChange={handleInput}
                required
              />
            </div>
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
                value={userInfo.email}
                onChange={handleInput}
                required
                autoFocus
              />
            </div>
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
                value={userInfo.password}
                onChange={handleInput}
                minLength="6"
                required
              />
            </div>
            <div className={styles.authBtnWrapper}>
              <button className={styles.buttonRegister} type="submit">
                Registration
              </button>
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
            </div>
            <div className={styles.textCenter}>
              <p className={styles.descr}>
                If you already have an account please
              </p>
              <button className={styles.buttonLogin}>
                <NavLink to={navigation.login} exact>
                  Login
                </NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
