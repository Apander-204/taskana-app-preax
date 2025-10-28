import styles from './navBar.module.css'
import Icon from '../icon/Icon';

export default function NavBar() {

    return(
        <nav className={styles.layout}>
            <a href="#" className={styles.incoming}>
                <Icon name='inbox' className={styles.icon} />
                Входящие
            </a>
        </nav>
    );

}