import styles from './incomingTasks.module.css'
import MainContainer from '../../components/mainContainer/MainContainer';
import Footer from '../../components/footer/Footer';
import { useTheme } from '../../components/contexts/ThemeContext';

export default function IncomingTasks() {

    const {theme} = useTheme();

    return(
        <div className={`${styles.layout} ${styles[theme]}`}>
            <MainContainer className={styles.main} />
            <Footer  className={styles.footer} />
        </div>
    );
}