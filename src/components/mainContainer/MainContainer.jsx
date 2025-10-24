import styles from './mainContainer.module.css'
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import DropDown from '../dropDown/DropDown';
import SortTasks from '../../utils/SortTasks';
import { useMemo, useState } from 'react';

export default function MainContainer({tasks, setActualTask, setAction, actualTask, setVisible, actualSort, setActualSort}) {

    const sortedTasks = useMemo(() => 
        SortTasks(tasks, actualSort),
        [tasks, actualSort]
    );

    return(
        <main className={styles.layout}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Входящие</h1>
                    <DropDown actualSort={actualSort} setActualSort={setActualSort} tasks={tasks}/>
                </div>
                <TaskList tasks={sortedTasks} setAction={setAction} setActualTask={setActualTask} setVisible={setVisible} actualTask={actualTask} />
            </div>
            <Footer />
        </main>
    );
}