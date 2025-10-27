import styles from './taskList.module.css'
import Illustration from '../illustration/Illustration';
import Icon from '../icon/Icon';

export default function TaskList( {tasks, setAction, setActualTask, setVisible, actualTask} ) {

    const openEditMenu = (task) => {
        setAction('edit');
        setActualTask(task);
        setVisible(true);
    };



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
                        <div className={`${styles.task} ${task == actualTask ? styles.activeTask : ''}`} tabIndex={0}>
                            <input type='checkbox' className={`${styles.checkbox} ${task.priority == 2 ? styles.chevron : ''} ${task.priority == 3 ? styles.arrow : ''} `} />
                            <p className={styles.tasktitle}>{task.title}</p>
                            <button className={styles.edit} onClick={() => openEditMenu(task)}>
                                <Icon name="edit" />
                            </button>
                        </div>
                    ))}
                </div>
            )
            
            }
            
        </div>
    );
}