import styles from './incomingTasks.module.css'
import MainContainer from '../../components/mainContainer/MainContainer';
import Footer from '../../components/footer/Footer';

export default function IncomingTasks() {
    return(
        <div className={styles.layout}>
            <MainContainer />
            <Footer />
        </div>
    );
}