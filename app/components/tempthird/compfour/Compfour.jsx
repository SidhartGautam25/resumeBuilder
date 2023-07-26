import React from 'react'
import styles from "./styles.module.css";
const Compfour = () => {
  return (
    <>
    <div className={styles.container}>
         <h3 style={{color:"rgb(0, 87, 187)"}}>WORK EXPERIANCE</h3>
         <span className={styles.work}>Fullstack devleper</span>
         <div className={styles.icon}><span>AirState Solution</span></div>
         <div className={styles.stay}><span>09/2015-10/2020</span><span>Adress Lucknow U.P</span></div>
         <div className={styles.list}>
            {/* <ul> */}
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Reici totam deleniti, consequuntur inventore necessitatibus nisi consequatur vero quis accusantium assumenda</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
            {/* </ul> */}
         </div>
    </div>
    <div className={styles.container2}>
         <span className={styles.work2}>Development Assistant</span>
         <div className={styles.icon}><span>AirState Solution</span></div>
         <div className={styles.stay}><span>09/2015-10/2020</span><span>Adress Lucknow U.P</span></div>
         <div className={styles.list}>
            {/* <ul> */}
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Reici totam deleniti, consequuntur inventore necessitatibus nisi consequatur vero quis accusantium assumenda</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,</li>
            {/* </ul> */}
         </div>
    </div>
    </>
  )
}

export default Compfour