import React from "react";
import { useDispatch } from "react-redux";
import { setError } from "../../redux/Slice";
import styles from "./Error.module.css";

// Sprite SVG icons
import { ErrorMessage } from "../SVG/sprite";

const Error = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container} onClick={() => dispatch(setError(null))}>
      <div className={styles.error__box}>
        <div className={styles.face}>
          <div className={styles.eye}></div>
          <div className={styles.eye + " " + styles.right}></div>
          <div className={styles.mouth + " " + styles.sad}></div>
        </div>
        <div className={styles.shadow + " " + styles.move}></div>
        <div className={styles.message}>
          <h1 className={styles.alert}>Error!</h1>
          <p className={styles.error__message}>{text}</p>
          <ErrorMessage />
        </div>
      </div>
    </div>
  );
};

export default Error;
