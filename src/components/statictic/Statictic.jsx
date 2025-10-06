import styles from './statictic.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Illustration from '../illustration/Illustration';

export default function Statictics() {

    const {theme} = useTheme();

    return(
        <div className={`${styles.layout} ${styles[theme]}`}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <Illustration name='book' />
                </div>
                <p className={styles.text}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
            </div>
        </div>
    );
}