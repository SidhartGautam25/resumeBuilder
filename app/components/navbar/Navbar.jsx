import styles from "./navbar.module.css";
import Link from "next/link";
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
  },[]);

  return (
    <div className={styles.header}>
      <div className={styles.st}>
        <Link className={styles.logo} href="/">
          <span>ResumeBuilder</span>
        </Link>
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
            <Link className={styles.active} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.active} href="/">
              About Us
            </Link>
          </li>
          <li>
            <Link className={styles.active} href="/templates">
              Templates
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
