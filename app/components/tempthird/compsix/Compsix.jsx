import React from "react";
import styles from "./styles.module.css";
const Compsix = () => {
  return (
    <div className={styles.container}>
      <h3 style={{color:"rgb(0, 87, 187)"}}>ORGANIGATION</h3>
      <div className={styles.organigation}>
        <div className={styles.name}>
          <div>Partners in Health</div>
          <span>(prasent-2020)</span>
        </div>
        <div className={styles.name}>
          <div>Humane Society</div>
          <span>(prasent-2021)</span>
        </div>
        <div className={styles.name}>
          <div>Global Fund for Women</div>
          <span>(prasent-2019)</span>
        </div>
      </div>
    </div>
  );
};
export default Compsix;
