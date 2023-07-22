import styles from "./navbar.module.css";
// import Link from "next/link";
import Image from "next/image";
import navsvg from "../../../public/navsvg.svg";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);

  const [wwidth, setWwidth] = useState();
  function myfun() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  useEffect(() => {
    setWwidth(window.innerWidth);
    if (wwidth > 480) {
      setShow(true);
    }
  });

  return (
    <div className={styles.header}>
      <div className={styles.st}>
        <a href="#" className={styles.logo}>
          <span>ResumeBuilder</span>
        </a>
        <div
          className={styles.main}
          onClick={() => {
            myfun();
          }}
        >
          <Image className={styles.svgimg} src={navsvg} alt="svg" />
        </div>
      </div>

      {show && (
        <ul className={styles.navbar}>
          <li>
            <a href="/" className={styles.active}>
              Home
            </a>
          </li>
          <li>
            <a href="/">Abouts Us</a>
          </li>
          <li>
            <a href="/templates">Templates</a>
          </li>
        </ul>
      )}
    </div>
  );
}
