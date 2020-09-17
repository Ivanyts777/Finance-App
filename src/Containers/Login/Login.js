import React, { useState } from "react";
import styles from "./Login.module.css";
import { userLogin } from "../../Components/Operations/operationsAuth";
import { useDispatch } from "react-redux";
import { Email, LockClose, Google } from "../../Components/SVG/sprite";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleInputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleTypeRegister = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        email: email,
        password: password,
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
          <form onSubmit={handleTypeRegister}>
            {/* - FORM START - */}

            <>
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
            <div className={styles.authBtnWrapper}>
              <button className={styles.buttonLogin} type="submit">
                Login
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
                If you don't have an account please
              </p>
              <button className={styles.buttonRegister}>
                <NavLink to={navigation.registration} exact>
                  Registration
                </NavLink>
              </button>
            </div>
            {/* - FORM END - */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
