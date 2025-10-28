import styles from './logo.module.css'
import Icon from '../icon/Icon';

export default function Logo() {
    return(
        <a href='#' className={styles.a}>
            <Icon name="logo" className={styles.logo} />
        </a>
    );
}