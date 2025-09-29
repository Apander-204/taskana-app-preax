import styles from './statictic.module.css'

export default function Statictics() {
    return(
        <div className={styles.layout}>
            <div className={styles.content}>
                <img src='./public/book_icon.png' className={styles.image}></img>
                <p className={styles.text}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
            </div>
        </div>
    );
}