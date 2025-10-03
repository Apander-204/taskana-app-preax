import styles from './taskList.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Illustration from '../illustration/Illustration';

export default function TaskList() {

    const {theme} = useTheme();

    return(
        <div className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>Все твои задачи организованы как надо</h2>
                <p className={styles.p}>Отличная работа! Ты большой молодец!</p>
                <div className={styles.image}>
                    {
                        theme=='light' ? (<Illustration name='task'/>) : (<Illustration name='darktask'/>)
                    }
                </div>
            </div>
        </div>
    );
}