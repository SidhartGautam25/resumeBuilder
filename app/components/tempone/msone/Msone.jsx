import styles from "./styles.module.css"
import { useState } from "react";

export default function Msone({sections,setsections,arr}) {
    
    const [full,setFull]=useState(false);
    function handleClickfirst(){
        if(full===false){
            setFull(true);
        }else{
            setFull(false);
        }
    }
    function handleClick(ind){
        setsections(ind)
    }
  
    return (
        <div className={styles.sidebar}>
        <div className={styles.main}>
            <div className={styles.first} onClick={()=>{handleClickfirst()}}>Manage Settings</div>
            {full && 
            <div className={styles.second}>
                {
                    sections.map((sec,ind)=>(
                        <div key={ind} className={styles.rows} onClick={()=>{handleClick(ind)}}>
                            <div className={styles.rowname}>{sec}</div>
                            <div className={styles.rowother}>
                                {
                                    (arr[ind]===true)?<div className={styles.check}></div>:<div className={styles.uncheck}></div>
                                }
                            </div>
                        </div>
                    ))
                }

            </div>}
        </div>
        <div className={styles.change}>Change Template</div>
        </div>
        
    )
}