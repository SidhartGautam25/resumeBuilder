import styles from "./styles.module.css";
import Image from "next/image";
import ind1 from "../../../public/facebook-circular-logo.png";
import ind2 from "../../../public/google.png";
import ind3 from "../../../public/github.png";
import ind4 from "../../../public/ocean-transportation.png";
import ind5 from "../../../public/instagram.png";
import ind6 from "../../../public/windows-logo.png";
import ind7 from "../../../public/wordpress-logo.png";
import ind8 from "../../../public/twitter-black-shape.png";
import ind9 from "../../../public/social.png";

export default function Slider() {
  return (
    <div className={styles.slidermain}>
      <div className={styles.ourclients}>our clients</div>
      <div className={styles.slider}>
        <div className={styles.slidertrack}>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind7} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind8} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind9} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind7} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind8} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind9} />
          </div>
        </div>
      </div>
    </div>
  );
}
