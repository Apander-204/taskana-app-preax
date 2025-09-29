import styles from './navBar.module.css'

export default function NavBar() {
    return(
        <nav className={styles.layout}>
            <a href="#" className={styles.incoming}>
                <img src='./public/icon1.png' className={styles.icon}></img>
                <p className={styles.text}>Входящие</p>
            </a>
        </nav>
    );
}