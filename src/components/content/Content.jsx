import styles from './content.module.css'
import NavBar from '../navBar/NavBar';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import SideBar from '../sideBar/SideBar';

export default function Content() {
    return(
        <div className={styles.layout}>
            <NavBar />
            <IncomingTasks />
            <SideBar />
        </div>
    );
}