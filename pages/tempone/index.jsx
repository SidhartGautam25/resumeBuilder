import { useRef, useState } from 'react'
import styles from './tempone.module.css'
import Onetwo from '@/app/components/temponetwo/Onetwo';
import Formtwo from '@/app/components/formtwo/formtwo';
import Onethree from '@/app/components/temponethree/Onethree';
import Formthree from '@/app/components/formthree/Formthree';
import Onefour from '@/app/components/temponefour/Onefour';
import Formfour from '@/app/components/formfour/Formfour';
import Onefive from '@/app/components/temponefive/Onefive';
import Onesix from '@/app/components/temponesix/Onesix';
import Oneseven from '@/app/components/temponeseven/Oneseven';
import Formfive from '@/app/components/formfive/Formfive';
import Formsix from '@/app/components/formsix/Formsix';
import Formseven from '@/app/components/formseven/Formseven';
export default function Index() {

    //for first form
    const [names, setNames] = useState({
        "username": "Situ Kumar",
        "gmail": "navneetnishchal1420@gmail.com",
        "city": "delhi",
        "state":"india"
    })
    const [formone,setFormone]=useState({
        "username":names.username,
        "gmail":names.gmail,
        "city":names.city,
        "state":names.state
    })
    const [firstdiv, setFirstdiv] = useState(false);
    
    function funone() {
        setFirstdiv(true);
    }
    function handleSubmitone(e) {
        console.log("debug");
        e.preventDefault();
        setNames(formone);
        setFirstdiv(false);
    }
    function crossfunctionone(){
        setFirstdiv(false);
    }
    const handleChangeone = (event) => {
        const { name, value } = event.target;
        setFormone((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      //first form work completted

    //second form 
    const [secdiv,setSecdiv]=useState(false);
    const [ind,setInd]=useState(-1);
    function setind(index){
        setInd(index);
        // console.log("index changed")
        // console.log(index);
    }
    function setsecdiv(data){
        setSecdiv(data);
    }

    const [exp, setExp] = useState({
        "title":"Experience",
        "comp":[
            {
                "compname":"Microsoft",
                "role":"SDE",
                "ach":"i have won best employee award"
            }
        ]
    })
    function setexp(data){
        setExp({...exp,comp:data});
    }
    function addexp(data){
        setExp({...exp,"comp":[...exp.comp,data]});
    }
    // console.log("index page role ",exp.comp[0].role)

    //fourth (eduction)
    const [fourdiv,setFourdiv]=useState(false);
    function setfourdiv(value){
        setFourdiv(value);
    }
    const [eduind,setEduind]=useState(-1);
    function seteduind(i){
         setEduind(i);
    }
    const [edu,setEdu]=useState({
        "title":"Education",
        "comp":[
            {
            "school":"mother pride school",
            "subject":"primary education",
            "ach":"i topped from bottom"
            }
        ]
    })
    function setedu(data){
        setEdu({...edu,comp:data});
    }
    function addedu(data){
        setEdu({...edu,"comp":[...edu.comp,data]});
    }

    //Skills section
    const [skill,setSkill]=useState(["full stack","devops"]);
    function addskill(value){
        setSkill([...skill,value]);

    }
    function removeskill(ind){
        console.log("here ",ind)
           const updated=skill.filter((e,i)=>i !== ind);
           setSkill(updated);
    }
    const[thirddiv,setThirddiv]=useState(false);
    function setthirddiv(value){
        console.log("i have been called ",value);
           setThirddiv(value);
    }

    //fifth comp   languages
    const [lang,setLang]=useState(["Java","Python","Javascript"]);
    function addlang(value){
        setLang([...lang,value]);
    }
    function removelang(ind){
        const updated=lang.filter((e,i)=>i !== ind);
        setLang(updated);
    }
    const[fifthdiv,setFifthdiv]=useState(false);
    function setfifthdiv(value){
        setFifthdiv(value);
    }
    //sixth component awards
    const [awards,setAwards]=useState(["nobel","punitzer"]);
    function addawards(value){
        setAwards([...awards,value]);
    }
    function removeawards(ind){
        const updated=awards.filter((e,i)=>i !== ind);
        setAwards(updated);
    }
    const [sixthdiv,setSixthdiv]=useState(false);
    function setsixthdiv(value){
        setSixthdiv(value);
    }

    //seventh component awards
    const [cert,setCert]=useState(["udemy certificate","courseera"])
    function addcert(value){
        setCert([...cert,value]);
    }
    function removecert(ind){
        const updated=cert.filter((e,i)=>i !== ind);
        setCert(updated);
    }
    const [sevendiv,setSevendiv]=useState(false);
    function setsevendiv(value){
        setSevendiv(value);
    }

    




    return (
        <div className={styles.main}>
            {secdiv && <Formtwo exp={exp} setexp={setexp} secdiv={secdiv} setsecdiv={setsecdiv} ind={ind} addexp={addexp} />} 
            {thirddiv && <Formthree skills={skill} setthirddiv={setthirddiv} addskill={addskill} removeskill={removeskill} />}
            {fourdiv && <Formfour edu={edu} setedu={setedu} fourdiv={fourdiv} setfourdiv={setfourdiv} ind={eduind} addedu={addedu}/>}
            {fifthdiv && <Formfive skills={lang} setfifthdiv={setfifthdiv} addskill={addlang} removeskill={removelang}/>}
            {sixthdiv && <Formsix skills={awards} setfifthdiv={setsixthdiv} addskill={addawards} removeskill={removeawards}/>}
            {sevendiv && <Formseven skills={cert} setfifthdiv={setsevendiv} addskill={addcert} removeskill={removecert}/>}
            {firstdiv &&
                <div className={styles.divone}>
                    <div className={styles.divonewrapper}>
                        
                        <form onSubmit={handleSubmitone}>

                            <div className={styles.inputcont}>
                                <div className={styles.labelcont}><label className={styles.labelsclass}>Username</label></div>
                                <input className={styles.inputarea}
                                    type="text"
                                    name="username"
                                    value={formone.username}
                                    onChange={handleChangeone}
                                />
                            </div>
                            <div className={styles.inputcont}>
                                <div className={styles.labelcont}><label className={styles.labelsclass}>Email</label></div>
                                <input className={styles.inputarea}
                                    type="email"
                                    name="gmail"
                                    value={formone.gmail}
                                    onChange={handleChangeone}
                                />
                            </div>
                            <div className={styles.inputcont}>
                                <div className={styles.labelcont}><label className={styles.labelsclass}>State</label></div>
                                <input className={styles.inputarea}
                                    type="text"
                                    name="state"
                                    value={formone.state}
                                    onChange={handleChangeone}
                                />
                            </div>
                            <div className={styles.inputcont}>
                                <div className={styles.labelcont}><label className={styles.labelsclass}>City</label></div>
                                <input className={styles.inputarea}
                                    type="text"
                                    name="city"
                                    value={formone.city}
                                    onChange={handleChangeone}
                                />
                            </div>
                            <div className={styles.buttondiv}>
                            <div className={styles.crossbutton} onClick={()=>{crossfunctionone()}}>
                            &#10060;
                            </div>
                            <button type="submit" value="Sign in" className={styles.savebutton}>Save</button>

                    
                        </div>

                           

                        </form>
                    </div>

                </div>}{
                !firstdiv && !secdiv && !thirddiv && !fourdiv && !fifthdiv && !sixthdiv && !sevendiv &&
                <div className={styles.mainclass}>
                    <div className={styles.heading}>
                        Resume
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.template}>
                            <div className={styles.firstmain} onClick={() => { funone() }} >
                                <div className={styles.first}>
                                    {names.username}
                                </div>
                                <div className={styles.second}>
                                    {names.gmail} | {names.city},{names.state}
                                </div>
                            </div>
                             <Onetwo data={exp} secdiv={secdiv} setsecdiv={setsecdiv} setind={setind} />
                             <Onethree skill={skill} addskill={addskill} removeskill={removeskill} setthirddiv={setthirddiv}/>
                             <Onefour data={edu} fourdiv={fourdiv} setfourdiv={setfourdiv} setind={seteduind}/>
                             <Onefive skill={lang} addskill={addlang} removeskill={removelang} setfifthdiv={setfifthdiv}/>
                             <Onesix skill={awards} addskill={addawards} removeskill={removeawards} setsixthdiv={setsixthdiv}/>
                             <Oneseven skill={cert} addskill={addcert} removeskill={removecert} setsevendiv={setsevendiv}/>
                             
                            
                            

                        </div>
                        <div className={styles.operation}>

                        </div>
                    </div>

                </div>
            }


        </div>
    )

}