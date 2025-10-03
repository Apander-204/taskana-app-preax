import styles from './navBar.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Icon from '../icon/Icon';

export default function NavBar() {

    const {theme} = useTheme();

    return(
        <nav className={`${styles.layout} ${styles[theme]}`}>
            <a href="#" className={styles.incoming} tabIndex={0}>
                <div className={styles.icon} >
                    <Icon name='inbox'/>
                </div>
                <p className={styles.text}>Входящие</p>
            </a>
        </nav>
    );
}