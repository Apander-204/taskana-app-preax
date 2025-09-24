import styles from './incomingTasks.module.css'

export default function IncomingTasks() {
    return(
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1 className={styles.title}>Входящие</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>Все твои задачи организованы как надо</h2>
                    <p className={styles.p}>Отличная работа! Ты большой молодец!</p>
                </div>
                <img src='./public/image.png' className={styles.image}></img>
            </div>
            <div className={styles.footer}>
                <p className={styles.text}>Проект выполнен в рамках стажировки <u>PREAX</u></p>
            </div>
        </div>
    );
}