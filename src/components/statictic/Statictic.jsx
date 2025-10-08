import styles from './statictic.module.css'
import Illustration from '../illustration/Illustration';

export default function Statictics() {

    return(
        <div className={styles.layout} >
            <div className={styles.image}>
                <Illustration name='book' />
            </div>
            <div>
                <p className={styles.text}>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
            </div>
        </div>
    );

}