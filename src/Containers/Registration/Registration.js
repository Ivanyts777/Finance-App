import React, { useState } from "react";
import styles from "./Registration.module.css";
import { createNewUser } from "../../Components/Operations/operationsAuth";
import { useDispatch } from "react-redux";
import { Email, LockClose, Account, Google } from "../../Components/SVG/sprite";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(createNewUser(userInfo));
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.leftbg}>
        <div className={styles.desktop_container}>
          <h2 className={styles.main_text2}>Finance App</h2>
        </div>
        <div className={styles.phone}></div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.main_text}>Finance App</h2>
        <div className={styles.authWrapper}>
          <form onSubmit={handleRegister}>
            <div className={styles.field}>
              <div className={styles.icon}>
                <Account />
              </div>
              <input
                className={styles.input}
                maxLength="25"
                id="lastName"
                placeholder="Name"
                name="name"
                type="text"
                value={userInfo.name}
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
                type="text"
                placeholder="Email"
                name="email"
                value={userInfo.email}
                onChange={handleInput}
                required
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
              <button type="button" className={styles.google}>
                <Google />
              </button>
            </div>
            <div className={styles.textCenter}>
              <p className={styles.descr}>
                If you already have an account please{" "}
                <NavLink to={navigation.login} exact>
                  login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
