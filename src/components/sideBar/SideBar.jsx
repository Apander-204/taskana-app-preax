import styles from './sideBar.module.css'

export default function SideBar() {
    return(
        <div className={styles.layout}>
            <img src='./public/book_icon.png' className={styles.image}></img>
            <p className={styles.text}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
        </div>
    );
}