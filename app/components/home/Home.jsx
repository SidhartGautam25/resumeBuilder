import styles from "./styles.module.css";
import ind1 from "../../../public/4261198.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.comp1}>
          <h1 className={styles.title}>Make your resume free.</h1>
          <p className={styles.para1}>
            Free to use. Developed by hiring professionals.
          </p>
          <p className={styles.para2}>
            Resume writing can be stressful, confusing, and time-consuming if
            you do it all on your own. With our Resume Maker, it’s quick,
            pain-free, and effective.
          </p>
          <button type="button" className={styles.button}>
            Create your Resume
          </button>
        </div>
        <div className={styles.com2}>
          <Image className={styles.cardimg} src={ind1} />
        </div>
      </div>
    </div>
  );
}
