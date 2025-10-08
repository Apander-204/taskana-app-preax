import styles from './taskList.module.css'
import Illustration from '../illustration/Illustration';

export default function TaskList() {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>Все твои задачи организованы как надо</h2>
                <p className={styles.p}>Отличная работа! Ты большой молодец!</p>
            </div>
            <div className={styles.image}>
                <Illustration name='task'/>
            </div>
        </div>
    );
}