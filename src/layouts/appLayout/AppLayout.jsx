import styles from './appLayout.module.css'
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import { useRef, useState } from 'react';

export default function AppLayout() {

    const [visible, setVisible] = useState(false);
    const inputRef = useRef(null);

    return(

        <div className={styles.layout}>
            <Header setVisible={setVisible} visible={visible} inputRef={inputRef}/>
            <Content visible={visible} setVisible={setVisible} inputRef={inputRef}/>
        </div>
    );
}