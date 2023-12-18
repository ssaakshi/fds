
import DateTime from "./dateTime/dateTime";
import styles from "./mainContent.module.css";
import Status from "./status/status";

const MainContent = ({ item }) => {

    return (
        <div className={styles.container}>
            <div className={styles.firstContainer}>
                <Status />
                <Status />
                <Status />
                <Status />
            </div>
            <div className={styles.secondContainer}>
                <DateTime />

            </div>
        </div>
    );
};

export default MainContent;
