import React from "react";
import styles from "./styles.module.css";
const Compseven = () => {
  return (
    <div className={styles.container}>
      <h3 style={{color:"rgb(0, 87, 187)"}}>LENGUAGE</h3>
      <div className={styles.lenguage}>
        <div className={styles.name}>
          <div>English</div>
          <span style={{color:"rgb(0, 87, 187)"}}>Full professional proficiency</span>
        </div>
        <div className={styles.name}>
          <div>Gujrati</div>
          <span style={{color:"rgb(0, 87, 187)"}}>Limited working proficiency</span>
        </div>
        <div className={styles.name}>
          <div>Hindi</div>
          <span style={{color:"rgb(0, 87, 187)"}}>Full proficiency</span>
        </div>
      </div>
    </div>
  );
};
export default Compseven;