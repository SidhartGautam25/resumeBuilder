import React from 'react'
import Image from "next/image";
import styles from "./styles.module.css";
import Git from "../../../../public/github.png";
import Mail from "../../../../public/mail.png";
import Phone from "../../../../public/phone.png";
import Location from "../../../../public/location-pointer.png";
import Linkedin from "../../../../public/linkedin.png";
const Comptwo = () => {
  return (
    <div className={styles.container}>
       <span className={styles.icons}><Image className={styles.logoimg} src={Mail} alt="loding..." /><span>isham@gmail.com</span></span>
       <span className={styles.icons}><Image className={styles.logoimg} src={Phone} alt="loding..." /><span>8976567534</span></span>
       <span className={styles.icons}><Image className={styles.logoimg} src={Location} alt="loding..." /><span>lucknow,sitapur</span></span>
       <span className={styles.icons}><Image className={styles.logoimg} src={Linkedin} alt="loding..." /><span>ishamgupta_26</span></span>
       <span className={styles.icons}><Image className={styles.logoimg} src={Git} alt="loding..." /><span>isham_26</span></span>
    </div>
  )
}

export default Comptwo