import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footermain}>
      <div className={styles.footfirst}>
        <div className={styles.foottitle4}>Connect With Us</div>
        <div className={styles.sociallink}>
          <div className={styles.socialitem}>
            <FaInstagram />
          </div>
          <div className={styles.socialitem}>
            <FaFacebookF />
          </div>
          <div className={styles.socialitem}>
            <FaLinkedin />
          </div>
          <div className={styles.socialitem}>
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className={styles.footsecond}>
        <div className={styles.foottitle}>Company</div>
        <div className={styles.footeritem}>
          &#10148; &nbsp; terms & Conditions
        </div>
        <div className={styles.footeritem}>&#10148; &nbsp; Privacy Policy</div>
        <div className={styles.footeritem}>&#10148; &nbsp; Contact</div>
      </div>

      <div className={styles.footthird}>
        <div className={styles.foottitle2}> Quick Links</div>
        <div className={styles.footeritem}>
          {" "}
          &#10148; &nbsp;Research Methodology
        </div>
        <div className={styles.footeritem}>&#10148; &nbsp; Career</div>
        <div className={styles.footeritem}>&#10148; &nbsp; Media Citations</div>
        <div className={styles.footeritem}>&#10148; &nbsp; FAQ</div>
      </div>

      <div className={styles.footthird}>
        <div className={styles.foottitle1}>Links</div>
        <div className={styles.footeritem}>&#10148; &nbsp; Instagram</div>
        <div className={styles.footeritem}>&#10148; &nbsp; LinkedIn</div>
        <div className={styles.footeritem}>&#10148; &nbsp; Gmail</div>
      </div>
    </div>
  );
}
