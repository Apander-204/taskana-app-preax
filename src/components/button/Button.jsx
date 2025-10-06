import styles from './button.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Icon from '../icon/Icon';

export default function Button() {

    const {theme} = useTheme();

    return(
        <button className={styles.button}>
            <Icon name='plussecond' className={styles.image} />
            <p className={styles.text}>Создать</p>
        </button>
    );
}