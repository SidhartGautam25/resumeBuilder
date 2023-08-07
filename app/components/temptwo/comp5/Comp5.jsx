import styles from "./styles.module.css";

export default function Comp5() {
  return (
    <div className={styles.intro}>
      <div className={styles.title}>Personal Info</div>
      <hr />
      <div className={styles.expe}>
        <div className={styles.comp}>
          <div className={styles.adtitle}>Address</div>
          <div>Lokhandwala, kolkata, west bengal, india</div>
        </div>
        <div className={styles.comp}>
          <div className={styles.adtitle}>Phone</div>
          <div>968532147</div>
        </div>
        <div className={styles.comp}>
          <div className={styles.adtitle}>Email</div>
          <div>james@example.com</div>
        </div>
        <div className={styles.comp}>
          <div className={styles.adtitle}>Linkdin</div>
          <div>james@linkdin.com</div>
        </div>
      </div>
    </div>
  );
}
