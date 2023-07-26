import React from 'react'
import styles from "./styles.module.css";
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
const Comptwo = () => {
  return (
    <div className={styles.container}>
       <span className={styles.icons}><MailIcon/><span>isham@gmail.com</span></span>
       <span className={styles.icons}><PhoneIcon/><span>8976567534</span></span>
       <span className={styles.icons}><PinDropIcon/><span>lucknow,sitapur</span></span>
       <span className={styles.icons}><LinkedIn/><span>ishamgupta_26</span></span>
       <span className={styles.icons}><GitHub/><span>isham_26</span></span>
    </div>
  )
}

export default Comptwo