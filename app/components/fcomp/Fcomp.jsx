import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ind1 from "../../../public/OE5TMY0.jpg";
import ind3 from "../../../public/tp204-resume-17.jpg";
// import ind4 from "../../../public/ind4.jpg";
export default function Index() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Pick Your Templates. Build Resume Free.</h1>
          </div>

          <div className={styles.cardmain}>
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind1} alt="loding..." />
            </div>
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind3} alt="loding..." />
            </div>
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind1} alt="loding..." />
            </div>
          </div>

          <div className={styles.btn}>
            <Link className={styles.link} href="/templates">
              <button type="button" className={styles.button}>
                More Templates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
