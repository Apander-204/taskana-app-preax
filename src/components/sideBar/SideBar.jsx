import styles from './sideBar.module.css'
import Statictics from '../statictic/Statictic';
import { useTheme } from '../contexts/ThemeContext';

export default function SideBar() {

    const {theme} = useTheme();

    return(
        <div className={`${styles.layout} ${styles[theme]}`}>
            <Statictics className={styles.statictic} />
        </div>
    );
}