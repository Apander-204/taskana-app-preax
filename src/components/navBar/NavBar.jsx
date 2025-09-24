import styles from './navBar.module.css'

export default function NavBar() {
    return(
        <div className={styles.layout}>
            <div className={styles.incoming}>
                <img src='./public/icon1.png' className={styles.icon}></img>
                <p className={styles.text}>Входящие</p>
            </div>
        </div>
    );
}