import styles from './appLayout.module.css'
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import { ThemeProvider } from '../../components/contexts/ThemeContext';


export default function AppLayout() {
    return(
        <ThemeProvider>
            <div className={styles.layout}>
                <Header className={styles.header} />
                <Content className={styles.content} />
            </div>
        </ThemeProvider>
    );
}