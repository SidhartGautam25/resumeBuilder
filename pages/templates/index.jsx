import styles from "./styles.module.css";
import Image from "next/image";
import ind1 from "../../public/OE5TMY0.jpg";
import ind2 from "../../public/tp204-resume-17.jpg";
// import ind3 from "../../public/ind3.jpg";
// import ind4 from "../../public/ind4.jpg";
// import ind5 from "../../public/ind5.jpg";
// import ind6 from "../../public/ind6.jpg";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>All Templates</h2>
          </div>
          <div className={styles.cardmain}>
            <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind1} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
            <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind2} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
            <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind1} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
          </div>
          <div className={styles.cardmain}>
          <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind2} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
            <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind1} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
            <Link className={styles.link} href="/tempone">
            <div className={styles.card}>
              <Image className={styles.cardimg} src={ind2} alt="loding..." />
              <span className={styles.textdec}>Template Name</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
