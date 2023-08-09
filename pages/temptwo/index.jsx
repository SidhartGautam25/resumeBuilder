import styles from "./styles.module.css";
import Comp1 from "@/app/components/temptwo/comp1/Comp1";
import Comp2 from "@/app/components/temptwo/comp2/Comp2";
import Comp3 from "@/app/components/temptwo/comp3/Comp3";
import Comp4 from "@/app/components/temptwo/comp4/Comp4";
import Comp5 from "@/app/components/temptwo/comp5/Comp5";
import Comp6 from "@/app/components/temptwo/comp6/Comp6";
export default function Index() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Resume</h2>
        </div>
        <div className={styles.component}>
          <div className={styles.leftcomp}>
            <Comp1 />
            <div className={styles.com2}>
              <div className={styles.com2left}>
                <Comp2 />
                <Comp3 />
                {/*education*/}
                <Comp3 />
                <Comp4 />
              </div>
              <div className={styles.com2right}>
                <Comp5 />
                <Comp6 />
                {/* project */}
                <Comp6 />
                {/* language */}
                <Comp6 />
              </div>
            </div>
          </div>
          <div className={styles.rightcomp}></div>
        </div>
      </div>
    </div>
  );
}
