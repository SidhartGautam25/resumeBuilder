import styles from "./styles.module.css";
import { useState } from "react";

export default function Oneseven({
  skill,
  addskill,
  removeskill,
  setsevendiv,
}) {
  function handleClick() {
    console.log("i have been called my friend");
    setsevendiv(true);
  }
  console.log("check it is");

  return (
    <div
      className={styles.main}
      onClick={() => {
        handleClick();
      }}
    >
      {/* {cond && <Formtwo data={data} ind={ind}/>} */}
      <div className={styles.wrapper}>
        <div className={styles.first}>Certificates</div>
        <div className={styles.second}>
          {skill.map((s, i) => {
            return <span key={i}>{i === skill.length - 1 ? s : `${s}, `}</span>;
            // if(i===skill.length-1){
            //     return s
            // }else{
            //     return `${s}, `
            // }
          })}
        </div>
      </div>
    </div>
  );
}
