import styles from './footer.module.css'
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {

    const {theme} = useTheme();

    return(
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <p className={styles.text}>Проект выполнен в рамках стажировки <a href='https://preax.ru/' className={styles.a} tabIndex={0}>PREAX</a></p>
        </footer>
    );
}