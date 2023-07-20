import Formtwo from "../formtwo/formtwo";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Onetwo({ data, secdiv,setsecdiv,setind}) {
    console.log("data");
    console.log(data);
    console.log(secdiv);
    // const [cond,setCondition]=useState(false);
    // const [ind,setInd]=useState(-1);
    function myfun(index){
        console.log("clicked")
        console.log("index ",index)
        // setCondition(true);
        setind(index);
        setsecdiv(true)
    }
    const [addcon,setAddcon]=useState(false);
    
    
   
    return (
        <div className={styles.main} >
            {/* {cond && <Formtwo data={data} ind={ind}/>} */}
            <div className={styles.wrapper}>
                <div className={styles.first}>
                    {data.title}
                </div>

                {data.comp.map((e,i) => {
                    return (
                        <div key={i} className={styles.second} onClick={()=>{myfun(i)}}>
                            <div className={styles.role}>{e.role}</div>
                            <div className={styles.company}>{e.compname}</div>
                            <div className={styles.ach}>{e.ach}</div>
                        </div>

                    );
                })}





            </div>



        </div>
    )
}