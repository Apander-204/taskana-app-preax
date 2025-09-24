import styles from './appLayout.module.css'
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';

export default function AppLayout() {
    return(
        <div className={styles.layout}>
            <Header className={styles.header} />
            <Content className={styles.content} />
        </div>
    );
}