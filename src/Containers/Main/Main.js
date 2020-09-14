import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <ul className={styles.Main}>
      <li>
        <h4 className={styles.title}>Date</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>01.43.34</span>
          </li>
          <li>
            <span className={styles.text}>03.43.34</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Type</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>-</span>
          </li>
          <li>
            <span className={styles.text}>+</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Category</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>rereg</span>
          </li>
          <li>
            <span className={styles.text}>erreqregre</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Comment</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>rergfngqerheg</span>
          </li>
          <li>
            <span className={styles.text}>erreqhtrwhtwhrtregre</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Sum</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>86</span>
          </li>
          <li>
            <span className={styles.text}>237</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Balance</h4>
        <ul className={styles.titleContainer}>
          <li>
            <span className={styles.text}>836</span>
          </li>
          <li>
            <span className={styles.text}>23</span>
          </li>
        </ul>
      </li>
      <li>
        <h4 className={styles.title}>Edit</h4>
        <ul className={styles.titleContainer}>
          <button>del</button>
          <button>edit</button>
        </ul>
      </li>
    </ul>
  );
};

export default Main;

// <div className={styles.Main}>
//   <div className={styles.titleContainer}>
//     <p className={styles.title}>Date</p>
//     <p className={styles.title}>Type</p>
//     <p className={styles.title}>Category</p>
//     <p className={styles.title}>Comment</p>
//     <p className={styles.title}>Sum</p>
//     <p className={styles.title}>Balance</p>
//     <p className={styles.title}>Edit</p>
//   </div>
//   <ul className={styles.list}>
//     <li className={styles.item}>
//       <span className={styles.text}>43.43.34</span>
//       <span className={styles.text}>-</span>
//       <span className={styles.text}>weew </span>
//       <span className={styles.text}>reg</span>
//       <span className={styles.text}>345 </span>
//       <span className={styles.text}>435</span>
//       <div className={styles.buttons}>
//         <button>del</button>
//         <button>edit</button>
//       </div>
//     </li>
//   </ul>
// </div>
