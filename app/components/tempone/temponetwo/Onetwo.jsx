import styles from "./styles.module.css";

export default function Onetwo({ data, setsecdiv, setind }) {
  function myfun(index) {
    setind(index);
    setsecdiv(true);
  }

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.first}>{data.title}</div>

        {data.comp.map((e, i) => {
          return (
            <div
              key={i}
              className={styles.second}
              onClick={() => {
                myfun(i);
              }}
            >
              <div className={styles.role}>{e.role}</div>
              <div className={styles.company}>{e.compname}</div>
              <div className={styles.ach}>{e.ach}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
