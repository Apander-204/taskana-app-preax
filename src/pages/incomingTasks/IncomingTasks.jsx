import styles from './incomingTasks.module.css'
import MainContainer from '../../components/mainContainer/MainContainer';

export default function IncomingTasks({ tasks, setTasks, setAction, actualTask, setActualTask, setVisible, actualSort, setActualSort }) {

    return(
        <div className={styles.layout}>
            <MainContainer tasks={tasks} setTasks={setTasks} setAction={setAction} setActualTask={setActualTask} setVisible={setVisible} actualTask={actualTask} actualSort={actualSort} setActualSort={setActualSort}/>
        </div>
    );
}