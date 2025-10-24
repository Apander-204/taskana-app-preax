import styles from './content.module.css'
import NavBar from '../navBar/NavBar';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import SideBar from '../sideBar/SideBar';
import TaskEditor from '../taskEditor/TaskEditor';
import { useState, useEffect } from 'react';

export default function Content({visible, setVisible, inputRef, action, setAction}) {
    const [tasks, setTasks] = useState([]);
    const [actualTask, setActualTask] = useState();
    const [actualSort, setActualSort] = useState('dateto');

    return(
        <div className={styles.layout}>

            <div className={styles.mainContent}>
                <NavBar />
                <IncomingTasks tasks={tasks} setTasks={setTasks} setAction={setAction} actualTask={actualTask} setActualTask={setActualTask} setVisible={setVisible} actualSort={actualSort} setActualSort={setActualSort}/>
                <SideBar />
            </div>

            <div className={`${styles.edit} ${visible ? styles.visible : ''}`}>
                <TaskEditor setTasks={setTasks} setVisible={setVisible} inputRef={inputRef} action={action} actualTask={actualTask} setActualTask={setActualTask} tasks={tasks} actualSort={actualSort}/>
            </div>
        </div>
    );
}