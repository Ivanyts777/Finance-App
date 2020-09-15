import React from "react";
import Balance from "../Balance/Balance";
import CurrencyExchage from "../CurrencyExchage/CurrencyExchage";
import Menu from "../Menu/Menu";

import styles from "./Diagram.module.css";
const Diagram = () => {
  return (
    <div>
      <div className={styles.mainGlobal}>
        <div>
          <Menu />
          <div className={styles.showTabletDesktop}>
            <Balance />
            <CurrencyExchage />
          </div>
        </div>

        <h1>DIAGRAM</h1>
      </div>
    </div>
  );
};

export default Diagram;
