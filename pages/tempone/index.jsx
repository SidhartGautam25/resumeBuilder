import { useRef, useState } from 'react'
import { ReactToPrint, useReactToPrint } from 'react-to-print';
import styles from './tempone.module.css'
import Onetwo from '@/app/components/tempone/temponetwo/Onetwo';
import Formtwo from '@/app/components/tempone/formtwo/formtwo';
import Onethree from '@/app/components/tempone/temponethree/Onethree';
import Formthree from '@/app/components/tempone/formthree/Formthree';
import Onefour from '@/app/components/tempone/temponefour/Onefour';
import Formfour from '@/app/components/tempone/formfour/Formfour';
import Onefive from '@/app/components/tempone/temponefive/Onefive';
import Onesix from '@/app/components/tempone/temponesix/Onesix';
import Oneseven from '@/app/components/tempone/temponeseven/Oneseven';
import Formfive from '@/app/components/tempone/formfive/Formfive';
import Formsix from '@/app/components/tempone/formsix/Formsix';
import Formseven from '@/app/components/tempone/formseven/Formseven';
import Msone from '@/app/components/tempone/msone/Msone';
export default function Index() {

    //for first form
    const [names, setNames] = useState({
        "username": "Situ Kumar",
        "gmail": "navneetnishchal1420@gmail.com",
        "city": "delhi",
        "state": "india"
    })
    const [formone, setFormone] = useState({
        "username": names.username,
        "gmail": names.gmail,
        "city": names.city,
        "state": names.state
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
    function crossfunctionone() {
        setFirstdiv(false);
        check()

    }
    const handleChangeone = (event) => {
        const { name, value } = event.target;
        setFormone((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    //first form work completted

    //second form 
    const [secdiv, setSecdiv] = useState(false);
    const [ind, setInd] = useState(-1);
    function setind(index) {
        setInd(index);
        // console.log("index changed")
        // console.log(index);
    }
    function setsecdiv(data) {
        setSecdiv(data);
        check()

    }

    const [exp, setExp] = useState({
        "title": "Experience",
        "comp": [
            {
                "compname": "Microsoft",
                "role": "SDE",
                "ach": "i have won best employee award"
            }
        ]
    })
    function setexp(data) {
        setExp({ ...exp, comp: data });
    }
    function addexp(data) {
        setExp({ ...exp, "comp": [...exp.comp, data] });
    }
    // console.log("index page role ",exp.comp[0].role)

    //fourth (eduction)
    const [fourdiv, setFourdiv] = useState(false);
    function setfourdiv(value) {
        setFourdiv(value);
        check()

    }
    const [eduind, setEduind] = useState(-1);
    function seteduind(i) {
        setEduind(i);
    }
    const [edu, setEdu] = useState({
        "title": "Education",
        "comp": [
            {
                "school": "mother pride school",
                "subject": "primary education",
                "ach": "i topped from bottom"
            }
        ]
    })
    function setedu(data) {
        setEdu({ ...edu, comp: data });
    }
    function addedu(data) {
        setEdu({ ...edu, "comp": [...edu.comp, data] });
    }

    //Skills section
    const [skill, setSkill] = useState(["full stack", "devops"]);
    function addskill(value) {
        setSkill([...skill, value]);

    }
    function removeskill(ind) {
        console.log("here ", ind)
        const updated = skill.filter((e, i) => i !== ind);
        setSkill(updated);
    }
    const [thirddiv, setThirddiv] = useState(false);
    function setthirddiv(value) {
        console.log("i have been called ", value);
        setThirddiv(value);
        check()

    }

    //fifth comp   languages
    const [lang, setLang] = useState(["Java", "Python", "Javascript"]);
    function addlang(value) {
        setLang([...lang, value]);
    }
    function removelang(ind) {
        const updated = lang.filter((e, i) => i !== ind);
        setLang(updated);
    }
    const [fifthdiv, setFifthdiv] = useState(false);
    function setfifthdiv(value) {
        setFifthdiv(value);
        check()

    }
    //sixth component awards
    const [awards, setAwards] = useState(["nobel", "punitzer"]);
    function addawards(value) {
        setAwards([...awards, value]);
    }
    function removeawards(ind) {
        const updated = awards.filter((e, i) => i !== ind);
        setAwards(updated);
    }
    const [sixthdiv, setSixthdiv] = useState(false);
    function setsixthdiv(value) {
        setSixthdiv(value);
        check()

    }

    //seventh component awards
    const [cert, setCert] = useState(["udemy certificate", "courseera"])
    function addcert(value) {
        setCert([...cert, value]);
    }
    function removecert(ind) {
        const updated = cert.filter((e, i) => i !== ind);
        setCert(updated);
    }
    const [sevendiv, setSevendiv] = useState(false);
    function setsevendiv(value) {
        setSevendiv(value);
        check()

    }


    const resumeref = useRef();
    const [rencon, setRencon] = useState(true);
    function check() {
        if (!firstdiv && !secdiv && !thirddiv && !fourdiv && !fifthdiv && !sixthdiv && !sevendiv) {
            console.log("this is true ")
            setRencon(false);
        } else {
            setRencon(true);
            console.log("this is false ")
        }
    }
    const handlePrint = useReactToPrint({
        content: () => resumeref.current,
        pageStyle: `
          @page {
            size:  220mm 300mm;
            margin: 2mm 1mm 1mm 1mm;
             /* Adjust the margin values as needed */
          }
          @media print {
            body {
              margin: 0;
            }
            
          }
        `,
    });

    const [sections, setSections] = useState(
        [
            "Experience",
            "Skills",
            "Education",
            "Language",
            "Awards",
            "Certificates"
        ]
    )
    const [arr, setArr] = useState([true, true, true, true, true, true])
    const [copy, setCopy] = useState(["exp", "skills", "edu", "lang", "awards", "cert"]);

    function setsections(ind, str) {
        console.log("bhai yhi ho tum")

        if (arr[ind] === true) {
            console.log("hata do isko")
            const updated = arr.map((val, i) => {
                if (i != ind) {
                    // No change
                    return val;
                } else {
                    // Return a new circle 50px below
                    return false;
                }
            });
            // Re-render with the new array
            setArr(updated);

        } else {
            console.log("wapas laao isko")
            const updated = arr.map((val, i) => {
                if (i != ind) {
                    // No change
                    return val;
                } else {
                    // Return a new circle 50px below
                    return true;
                }
            });
            // Re-render with the new array
            setArr(updated);

        }
    }

    const [dragitemindex, setDragitemindex] = useState();
    const [dragoveritemindex, setDragoveritemindex] = useState();

    function dragstart(e, index) {
        setDragitemindex(index);
    }
    function dragover(e) {
        e.preventDefault();
    }
    function handledrop(index) {
        const updated = [...copy];
        const dragitem = updated.splice(dragitemindex, 1);
        updated.splice(dragoveritemindex, 0, dragitem);
        setCopy(updated);

    }
    function dragenter(index) {
        setDragoveritemindex(index);
    }
    function dragend() {
        setDragitemindex(undefined);
        setDragoveritemindex(undefined);
    }




    return (
        <div className={styles.main}>
            {secdiv ? (<Formtwo exp={exp} setexp={setexp} secdiv={secdiv} setsecdiv={setsecdiv} ind={ind} addexp={addexp} />) : (<span></span>)}
            {thirddiv ? (<Formthree skills={skill} setthirddiv={setthirddiv} addskill={addskill} removeskill={removeskill} />) : (<span></span>)}
            {fourdiv ? (<Formfour edu={edu} setedu={setedu} fourdiv={fourdiv} setfourdiv={setfourdiv} ind={eduind} addedu={addedu} />) : (<span></span>)}
            {fifthdiv ? (<Formfive skills={lang} setfifthdiv={setfifthdiv} addskill={addlang} removeskill={removelang} />) : (<span></span>)}
            {sixthdiv ? (<Formsix skills={awards} setfifthdiv={setsixthdiv} addskill={addawards} removeskill={removeawards} />) : (<span></span>)}
            {sevendiv ? (<Formseven skills={cert} setfifthdiv={setsevendiv} addskill={addcert} removeskill={removecert} />) : (<span></span>)}
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
                                <div className={styles.crossbutton} onClick={() => { crossfunctionone() }}>
                                    &#10060;
                                </div>
                                <button type="submit" value="Sign in" className={styles.savebutton}>Save</button>


                            </div>



                        </form>
                    </div>

                </div>}{
                rencon ? (
                    <div className={styles.mainclass}>
                        <div className={styles.heading}>
                            Resume
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.template} ref={resumeref}>
                                <div className={styles.firstmain} onClick={() => { funone() }} >
                                    <div className={styles.first}>
                                        {names.username}
                                    </div>
                                    <div className={styles.second}>
                                        {names.gmail} | {names.city},{names.state}
                                    </div>
                                </div>


                                {
                                    copy.map((ele, i) => (


                                        
                                        <div key={i}>
                                            {
                                        ele == "edu" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)} onDragEnd={() => { dragend() }}>
                                            {arr[0] && <Onetwo data={exp} secdiv={secdiv} setsecdiv={setsecdiv} setind={setind} />}
                                        </div>}
                                            {
                                        ele == "skills" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)} onDragEnd={() => { dragend() }}>

                                            {arr[1] && <Onethree skill={skill} addskill={addskill} removeskill={removeskill} setthirddiv={setthirddiv} />}
                                        </div>}{

                                        ele == "exp" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)} onDragEnd={() => { dragend() }}>
                                            {arr[2] && <Onefour data={edu} fourdiv={fourdiv} setfourdiv={setfourdiv} setind={seteduind} />}
                                        </div>}{

                                         ele == "lang" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)}  onDragEnd={() => { dragend() }}>
                                            {arr[3] && <Onefive skill={lang} addskill={addlang} removeskill={removelang} setfifthdiv={setfifthdiv} />}
                                        </div>}{


                                        ele == "awards" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)} onDragEnd={() => { dragend() }}>
                                            {arr[4] && <Onesix skill={awards} addskill={addawards} removeskill={removeawards} setsixthdiv={setsixthdiv} />}
                                        </div>}{

                                        ele == "cert" && <div draggable onDragStart={(e) => dragstart(e, i)} onDragOver={(e) => dragover(e)} onDrop={() => handledrop(i)}
                                            onDragEnter={() => dragenter(i)} onDragEnd={() => { dragend() }}>
                                             {arr[5] && <Oneseven skill={cert} addskill={addcert} removeskill={removecert} setsevendiv={setsevendiv} />}
                                        </div>}


                                     </div>
                                    )
                                    )
                                }








{/* 



                                <div >
                                    {arr[2] && <Onefour data={edu} fourdiv={fourdiv} setfourdiv={setfourdiv} setind={seteduind} />}
                                </div>
                                <div >
                                    {arr[3] && <Onefive skill={lang} addskill={addlang} removeskill={removelang} setfifthdiv={setfifthdiv} />}
                                </div>
                                <div >
                                    {arr[4] && <Onesix skill={awards} addskill={addawards} removeskill={removeawards} setsixthdiv={setsixthdiv} />}
                                </div>
                                <div >
                                    {arr[5] && <Oneseven skill={cert} addskill={addcert} removeskill={removecert} setsevendiv={setsevendiv} />}
                                </div>

 */}


                            </div>
                            <div className={styles.operation}>


                                <button className={styles.downbutton} onClick={handlePrint}>Download</button>

                                <Msone sections={sections} setsections={setsections} arr={arr} />



                            </div>
                        </div>

                    </div>) : (<span></span>)
            }


        </div>
    )

}