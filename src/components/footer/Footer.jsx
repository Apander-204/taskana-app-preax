import styles from './footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p className={styles.text}>Проект выполнен в рамках стажировки <a href='https://preax.ru/' className={styles.text}>PREAX</a></p>
        </footer>
    );
}