
import styles from "./status.module.css"

const Status = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                OD Status
            </div>
            <div>
                <div className={styles.containerContent}>
                    <li>OD Complete</li>
                    <button className={styles.button}>submit</button>
                </div>
                <div className={styles.containerContent}>
                    <li>OD Complete</li>
                    <button className={styles.button}>submit</button>
                </div>
                <div className={styles.containerContent}>
                    <li>OD Complete</li>
                    <button className={styles.button}>submit</button>
                </div>
            </div>
        </div>
    );
};

export default Status;
