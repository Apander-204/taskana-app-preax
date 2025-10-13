import styles from './content.module.css'
import NavBar from '../navBar/NavBar';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import SideBar from '../sideBar/SideBar';
import TaskEditor from '../taskEditor/TaskEditor';
import { useState } from 'react';

export default function Content({visible, setVisible}) {

    const [tasks, setTasks] = useState([]);

    return(
        <div className={styles.layout}>
            <NavBar />
            <IncomingTasks tasks={tasks} />
            <div className={`${styles.edit} ${visible ? styles.visible : ''}`}>
                <TaskEditor setTasks={setTasks} setVisible={setVisible} />
            </div>
            <SideBar />
        </div>
    );
}