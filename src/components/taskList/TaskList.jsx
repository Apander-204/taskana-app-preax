import styles from './taskList.module.css'
import Illustration from '../illustration/Illustration';

export default function TaskList( {tasks} ) {

    return(
        <div className={styles.layout}>
            
            {tasks.length == 0 ? (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.subtitle}>Все твои задачи организованы как надо</h2>
                        <p className={styles.p}>Отличная работа! Ты большой молодец!</p>
                    </div>
                    <div className={styles.image}>
                        <Illustration name='task'/>
                    </div>
                </div>
            ) : (
                <div className={styles.test}>
                    {tasks.slice().reverse().map(task => (
                        <div className={styles.task} tabIndex={0}>
                            <input type='checkbox' className={`${styles.checkbox} ${task.priority == 2 ? styles.chevron : ''} ${task.priority == 3 ? styles.arrow : ''} `} />
                            <p className={styles.tasktitle}>{task.title}</p>
                        </div>
                    ))}
                </div>
            )
            
            }
            
        </div>
    );
}