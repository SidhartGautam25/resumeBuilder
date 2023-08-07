import styles from "./styles.module.css";

export default function Onethree({ skill, setthirddiv }) {
  function handleClick() {
    setthirddiv(true);
  }
  return (
    <div
      className={styles.main}
      onClick={() => {
        handleClick();
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.first}>Skills</div>
        <div className={styles.second}>
          {skill.map((s, i) => {
            return <span key={i}>{i === skill.length - 1 ? s : `${s}, `}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
