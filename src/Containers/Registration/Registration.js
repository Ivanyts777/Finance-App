import React, { useState } from "react";
import styles from "./Registration.module.css";
import googleIcon from "../../Components/SVG/gicon.png";
import { createNewUser } from "../../Components/Operations/operationsAuth";
import { useDispatch } from "react-redux";
import { Email, LockClose, Account } from "../../Components/SVG/sprite";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleTypeRegister = (e) => {
    e.preventDefault();
    dispatch(createNewUser({ name: `${firstName} ${lastName}`, email: email, password: password }));
  };

  return (
    <div className={styles.authWrapper}>
      <form onSubmit={handleTypeRegister}>
        {/* - FORM START - */}

        <>
          {/* - FIRST NAME IMPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Account />
            </div>
            <input className={styles.input} maxLength="25" id="name" type="text" placeholder="First name" name="firstName" value={firstName} onChange={handleInputFirstName} required autoFocus />
          </div>

          {/* - LAST NAME INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Account />
            </div>
            <input className={styles.input} maxLength="25" id="lastName" placeholder="Last name" name="lastName" type="text" value={lastName} onChange={handleInputLastName} required />
          </div>

          {/* - EMAIL INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <Email />
            </div>
            <input id="email" className={styles.input} type="email" placeholder="Email" name="email" value={email} onChange={handleInputEmail} required autoFocus />
          </div>

          {/* - PASSWORD INPUT - */}
          <div className={styles.field}>
            <div className={styles.icon}>
              <LockClose />
            </div>
            <input className={styles.input + " " + styles.inputPassword} placeholder="Password" id="password" type="password" name="password" value={password} onChange={handleInputPassword} minLength="6" required />
          </div>
        </>
        <div className={styles.authBtnWrapper}>
          <button className={styles.buttonRegister} type="submit">
            Registration
          </button>
          <button type="button" /*onClick={googleSignIn}*/ className={styles.google}>
            <img className={styles.googleIcon} src={googleIcon} alt="google-icon" />
            Google
          </button>
        </div>
        <div className={styles.authBtnWrapper}>
          <p className={styles.descr}>If you already have an account please</p>
          <button className={styles.buttonLogin}>
            <NavLink to={navigation.login} exact>
              Login
            </NavLink>
          </button>
        </div>

        {/* - FORM END - */}
      </form>
    </div>
  );
};

export default Registration;
