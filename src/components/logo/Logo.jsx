import styles from './logo.module.css'

export default function Logo() {
    return(
        <a href='#'>
           <img src="./public/logo.png" className={styles.logo} tabIndex={0}></img> 
        </a>
    );
}