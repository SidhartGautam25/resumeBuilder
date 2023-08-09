import React from "react";
import Compone from "@/app/components/tempthird/compone/compone";
import styles from "./tempthird.module.css";
import Comptwo from "@/app/components/tempthird/comptwo/Comptwo";
import Compthree from "@/app/components/tempthird/compthree/Compthree";
import Compfour from "@/app/components/tempthird/compfour/Compfour";
import Compfive from "@/app/components/tempthird/compfive/Compfive";
import Compsix from "@/app/components/tempthird/compsix/Compsix";
import Compseven from "@/app/components/tempthird/compseven/Compseven";
export default function Index() {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h2>RESUME</h2>
        </div>
        <div className={styles.templet}>
          <div className={styles.left}>
            <div className={styles.content}><Compone/>
            <hr/>
            <Comptwo/>
            <hr/>
            <Compthree/>
            <Compfour/>
            <Compfive/>
            <Compsix/>
            <Compseven/>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}
