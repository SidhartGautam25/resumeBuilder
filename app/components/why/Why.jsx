import styles from "./styles.module.css";

export default function Index() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Why build resume with ResumeBuilder?</h1>
          </div>

          <div className={styles.cardmain}>
            <div className={styles.card}>
              <h2>We are actually free</h2>
              <p>
                No gimmicks, no freemium features, no joke. Get everything you
                need to build a professional resume that shows off your best
                qualities to help you land your next job.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Data-Driven Templates</h2>
              <p>
                Rest assured that the templates you find on Resume.com are the
                best around. Based on data from what employers want to see in
                candidates, we have created our templates with hiring in mind.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Get Seen</h2>
              <p>
                With your resume ready for top employers, easily share with
                millions of interested employers on Indeed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
