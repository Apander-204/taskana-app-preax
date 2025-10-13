import styles from './incomingTasks.module.css'
import MainContainer from '../../components/mainContainer/MainContainer';

export default function IncomingTasks({ tasks }) {

    return(
        <div className={styles.layout}>
            <MainContainer tasks={tasks} />
        </div>
    );
}