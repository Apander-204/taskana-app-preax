import styles from './appLayout.module.css'
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import { useEffect, useRef, useState } from 'react';

export default function AppLayout() {

    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState('create');
    const inputRef = useRef(null);

    return(

        <div className={styles.layout}>
            <Header setVisible={setVisible} visible={visible} inputRef={inputRef} setAction={setAction}/>
            <Content visible={visible} setVisible={setVisible} inputRef={inputRef} action={action} setAction={setAction}/>
        </div>
    );
}