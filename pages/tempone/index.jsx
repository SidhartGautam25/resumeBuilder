import { useState } from 'react'
import styles from './tempone.module.css'
export default function Index() {
    
    
    const [names, setNames] = useState({
        "title": "Situ Kumar",
        "gmail": "navneetnishchal1420@gmail.com"
    })
    const[firstdiv,setFirstdiv]=useState(false);
    function funone(){
        setFirstdiv(true);
    }
    return (
        <div className={styles.mainclass}>
            {firstdiv && 
                <div className={styles.divone}>
                             divone
                </div>} 
            <div className={styles.heading}>
                 Resume
            </div>
            <div className={styles.wrapper}>
                <div className={styles.template}>
                    <div className={styles.firstmain} onClick={()=>{funone()}} >
                        <div className={styles.first}>
                            {names.title}
                        </div>
                        <div className={styles.second}>
                            {names.gmail}
                        </div>
                    </div>

                </div>
                <div className={styles.operation}>

                </div>
            </div>

        </div>
    )

}