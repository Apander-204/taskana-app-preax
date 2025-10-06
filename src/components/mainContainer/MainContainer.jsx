import styles from './mainContainer.module.css'
import TaskList from '../taskList/TaskList';
import { useTheme } from '../contexts/ThemeContext';

export default function MainContainer() {

    const {theme} = useTheme();

    return(
        <main className={`${styles.layout} ${styles[theme]}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>Входящие</h1>
            </div>
            <TaskList className={styles.tasks} />
        </main>
    );
}