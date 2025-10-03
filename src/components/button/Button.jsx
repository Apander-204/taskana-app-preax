import styles from './button.module.css'
import { useTheme } from '../contexts/ThemeContext';

export default function Button() {

    const {theme} = useTheme();

    return(
        <button className={styles.button}>
            <img src="./public/plus.png" className={styles.image}></img>
            <p className={styles.text}>Создать</p>
        </button>
    );
}