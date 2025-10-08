import styles from './mainContainer.module.css'
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';

export default function MainContainer() {

    return(
        <main className={styles.layout}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Входящие</h1>
                </div>
                <TaskList />
            </div>
            <Footer />
        </main>
    );
}