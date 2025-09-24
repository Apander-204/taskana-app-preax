import styles from './button.module.css'

export default function Button() {
    return(
        <button className={styles.button}>
            <img src="./public/plus.png" className={styles.image}></img>
            <p className={styles.text}>Создать</p>
        </button>
    );
}