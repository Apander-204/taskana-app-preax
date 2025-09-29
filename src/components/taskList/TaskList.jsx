import styles from './taskList.module.css'

export default function TaskList() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>Все твои задачи организованы как надо</h2>
                <p className={styles.p}>Отличная работа! Ты большой молодец!</p>
                <img src='../public/image.png' className={styles.image}></img>
            </div>
        </div>
    );
}