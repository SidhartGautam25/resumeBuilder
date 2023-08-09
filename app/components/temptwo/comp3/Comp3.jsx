import styles from "./styles.module.css";

export default function Comp3() {
  return (
    <div className={styles.intro}>
      <div className={styles.title}>Experience</div>
      <hr />
      <div className={styles.expe}>
        <div className={styles.date}>
          <span>2001-05-</span>
          <span>2008-09</span>
        </div>
        <div className={styles.info}>
          <div className={styles.position}>Senior Manager</div>
          <div className={styles.company}>Google</div>
          <ul className={styles.point}>
            <li>
              Designing user interfaces with HTML, CSS, JavaScript. JavaScript
              is most used language in web devlopment
            </li>
            <li>Developing server-side logic and databases.</li>
            <li>Creating websites that adapt to various devices.</li>
            <li>Implementing measures to protect against cyber threats.</li>
            <li>Utilizing tools like React, Angular, or Vue.js.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
