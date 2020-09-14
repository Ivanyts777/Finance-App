import React from "react";
import styles from "./CurrencyExchage.module.css";

const CurrencyExchage = () => {
  return (
    <div className={styles.currency__exchage_background}>
      <div className={styles.currency__exchage_title_bg}>
        <div className={styles.currency__exchage_container}>
          <p className={styles.currency__exchage_transactions}>Валюта</p>
          <p className={styles.currency__exchage_transactions}>Продажа</p>
          <p className={styles.currency__exchage_transactions}>Покупка</p>
        </div>
        <div className={styles.currency__exchage}>
          <div className={styles.currency__exchage_container_1}>
            <p className={styles.currency__exchage_name}>USD</p>
            <p className={styles.currency__exchage_sell}>12.25</p>
            <p className={styles.currency__exchage_buy}>23.32</p>
          </div>
        </div>
        <div className={styles.currency__exchage}>
          <div className={styles.currency__exchage_container_1}>
            <p className={styles.currency__exchage_name}>EUR</p>
            <p className={styles.currency__exchage_sell}>23.69</p>
            <p className={styles.currency__exchage_buy}>34.85</p>
          </div>
        </div>
        <div className={styles.currency__exchage}>
          <div className={styles.currency__exchage_container_1}>
            <p className={styles.currency__exchage_name}>UAH</p>
            <p className={styles.currency__exchage_sell}>66.36</p>
            <p className={styles.currency__exchage_buy}>45.15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchage;
