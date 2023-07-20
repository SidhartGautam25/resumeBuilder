import styles from "./styles.module.css"
import { useState } from "react";

export default function Formfour({edu,setedu,fourdiv,setfourdiv,ind,addedu}) {
    // console.log("here ");
    // console.log(data)
   
    const [formone,setFormone]=useState({
        "school":edu.comp[ind].school,
        "subject":edu.comp[ind].subject,
        "ach":edu.comp[ind].ach
    })
    function addfun(){
        console.log("added")
           addedu(formone);
           setfourdiv(false);
          

    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("exp.comp ")
        console.log(edu.comp);
        const nextcomp = edu.comp.map((e,i) => {
            if (i != ind) {
              // No change
              console.log("you came here ",i," ind ",ind)
              return e;
            } else {
              // Return a new circle 50px below
              console.log("printing iv ",i," ind ",ind)
              console.log(e)
              return {
                "school":formone.school,
                "subject":formone.subject,
                "ach":formone.ach
              };
            }
          });
          console.log("checking")
          setedu(nextcomp);
          setfourdiv(false);
          

        
    }
    function deletefunction(){
        const temp=edu.comp.filter((e,i)=>i !== ind)
        // console.log(temp);
        setedu(temp);
        setfourdiv(false);
          

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormone((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      function crossfunction(){
        setfourdiv(false);
      }
    
   return(
    <div className={styles.divone}>
                    <div className={styles.divonewrapper}>
    <form onSubmit={handleSubmit}>

    <div className={styles.inputcont}>
        <div className={styles.labelcont}><label className={styles.labelsclass}>School</label></div>
        <input className={styles.inputarea}
            type="text"
            name="school"
            value={formone.school}
            onChange={handleChange}
        />
    </div>
    <div className={styles.inputcont}>
        <div className={styles.labelcont}><label className={styles.labelsclass}>Subject</label></div>
        <input className={styles.inputarea}
            type="text"
            name="subject"
            value={formone.subject}
            onChange={handleChange}
        />
    </div>
    <div className={styles.inputcont}>
        <div className={styles.labelcont}><label className={styles.labelsclass}>Achievments</label></div>
        <textarea className={styles.textareaclass}
            name="ach"
            value={formone.ach}
            onChange={handleChange}
        />
    </div>
   
    <div className={styles.buttondiv}>
    <div className={styles.crossbutton} onClick={()=>{crossfunction()}}>
    &#10060;
    </div>
   
    
    <div className={styles.crossbutton} onClick={()=>{deletefunction()}}>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
    </div>
    <button type="submit" value="Sign in" className={styles.savebutton}>Save</button>
    <div  className={styles.addbutton} onClick={()=>{addfun()}}>Add</div>



</div>

   

</form></div></div>
   )
}