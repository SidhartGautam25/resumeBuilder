import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navmain}>
      <div className={styles.navtitle}>
        <span>ResumeBuilder</span>
      </div>
      <div className={styles.navitemsdiv}>
        <div className={styles.liitems}>Home</div>
        <div className={styles.liitems}>About Us</div>
        <div className={styles.liitems}>
          <Link className={styles.link} href="/templates">
            Tempalets
          </Link>
        </div>
      </div>
    </div>
  );
}
