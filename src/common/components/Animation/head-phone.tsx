import styles from "./head.module.scss";
import { Image } from "antd";
export default function HeadePhone() {
    return (
        <div>
            <div className={styles.head_phone_1}>
                <Image
                    src="/video/img/head_phone.svg"
                    preview={false}
                    alt="word247"
                    width={100}
                    // height={190}
                />
            </div>
            <div className={styles.smw_wrapper}>
                <div className={styles.swm}>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                    <i className={styles.wb}></i>
                </div>
            </div>
        </div>
    );
}
