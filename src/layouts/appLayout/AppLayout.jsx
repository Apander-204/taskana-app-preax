import styles from './appLayout.module.css'
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import { useState } from 'react';

export default function AppLayout() {

    const [visible, setVisible] = useState(false);

    return(

        <div className={styles.layout}>
            <Header setVisible={setVisible} visible={visible}/>
            <Content visible={visible} setVisible={setVisible}/>
        </div>
    );
}