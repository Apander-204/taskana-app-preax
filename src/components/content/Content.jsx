import styles from './content.module.css'
import NavBar from '../navBar/NavBar';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import SideBar from '../sideBar/SideBar';

export default function Content() {
    return(
        <div className={styles.layout}>
            <div className={styles.navbar} >
                <NavBar />
            </div>
            <div className={styles.tasks} >
                <IncomingTasks />
            </div>
            <div className={styles.sidebar} >
                <SideBar />
            </div>
            
        </div>
    );
}