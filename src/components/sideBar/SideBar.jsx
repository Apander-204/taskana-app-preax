import styles from './sideBar.module.css'
import Statictics from '../statictic/Statictic';

export default function SideBar() {

    return(
        <aside className={styles.layout}>
            <Statictics />
        </aside>
    );

}