import styles from './sideBar.module.css'
import Statictics from '../statictic/Statictic';

export default function SideBar() {
    return(
        <div className={styles.layout}>
            <Statictics />
        </div>
    );
}