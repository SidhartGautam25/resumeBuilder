
import styles from "./styles.module.css";
import { useState } from "react";

export default function Onethree({skill,addskill,removeskill,setthirddiv}) {
    function handleClick(){
        console.log("i have been called my friend")
        setthirddiv(true);
    }
    console.log("check it is")
    console.log(setthirddiv);
    return (
        <div className={styles.main} onClick={()=>{handleClick()}}>
            {/* {cond && <Formtwo data={data} ind={ind}/>} */}
            <div className={styles.wrapper}>
                <div className={styles.first}>
                    Skills
                </div>
                <div className={styles.second}>
                    {
                        skill.map((s,i)=>{
                            if(i===skill.length-1){
                                return s
                            }else{
                                return `${s}, `
                            }
                            
                        }
                           
                            
                        )
                    }
                </div>

               

            </div>



        </div>
    )
}