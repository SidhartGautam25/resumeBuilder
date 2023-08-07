import styles from "./styles.module.css";

export default function Comp6() {
  return (
    <div className={styles.intro}>
      <div className={styles.title}>Skills</div>
      <hr />
      <div className={styles.expe}>
        <div className={styles.comp}>java</div>
        <div className={styles.comp}>c++</div>
        <div className={styles.comp}>python</div>
        <div className={styles.comp}>web devlopment</div>
      </div>
    </div>
  );
}
