import styles from './taskEditor.module.css'
import Icon from '../icon/Icon';
import GenerateId from '../../utils/GenerateId';
import SortTasks from '../../utils/SortTasks';
import { useState, useEffect } from 'react';

export default function TaskEditor( {setTasks, setVisible, inputRef, action, actualTask, setActualTask, tasks, actualSort} ) {

    const [inputValue, setInputValue] = useState('');
    const disableAddButton = inputValue.trim() == '';

    const disableSaveButton = () => {
        if (!actualTask) return true;

        const hasChanges = inputValue !== actualTask.title || activeButton !== actualTask.priority;
        const isEmpty = inputValue.trim() === '';
        return !hasChanges || isEmpty;
    };

    const addTask = () => {
        const now = new Date().toISOString();

        const newTask = {
            id: GenerateId(),
            title: inputValue,
            priority: activeButton,
            createdAt: now,
            updatedAt: now
        };

        setTasks(tasks => [...tasks, newTask]);
        changeVisible();
    };

    const editTask = () => {
        const now = new Date().toISOString();

        const updatedTask = {
            ...actualTask,
            title: inputValue,
            priority: activeButton,
            updatedAt: now
        };

        setTasks(prevTasks => prevTasks.map(task => 
            task.id === actualTask.id ? updatedTask : task
        ));

        setActualTask(null);
        changeVisible();
        SortTasks(tasks, actualSort);
    };

    const deleteTask = () => {
        setTasks(prev => {
            return prev.filter(task => task.id !== actualTask.id);
        });
        
        setActualTask(null);
        changeVisible();
    };

    const [activeButton, setActiveButton] = useState(1);

    const changeVisible = () => {
        setVisible(false);
        setInputValue('');
        setActiveButton(1);
        setActualTask(null);
    }

    const crossClick = () => {
        setInputValue('');
    }

    useEffect(() => {
        if(action=='edit' && actualTask) {
            setInputValue(actualTask.title);
            setActiveButton(actualTask.priority);
        }
        else {
            setInputValue('');
            setActiveButton(1);
        }
    }, [action, actualTask]);

    if(action=='create') {
        return(
            <div className={styles.layout}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Создание задачи</h1>
                    <div>
                        <div className={styles.subtitle}>
                            <p className={styles.p}>Название</p>
                            <p className={styles.star}>*</p>
                        </div>
                        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Название задачи'  className={styles.input} ref={inputRef} />
                        <button className={styles.cross} onClick={crossClick}>
                            <Icon name="cross" className={styles.crossimg} />
                        </button>
                    </div>
                </div>
                <div className={styles.priority}>
                    <div className={styles.main}>
                        <div className={styles.content}>
                            <p className={styles.prioryp}>Приоритет</p>
                            <div className={styles.items}>
                                <button className={`${styles.item_one} ${activeButton==1 ? styles.active : ''}`} onClick={() => setActiveButton(1)}><Icon name="minus"/></button>
                                <button className={`${styles.item_two} ${activeButton==2 ? styles.active : ''}`} onClick={() => setActiveButton(2)}><Icon name="chevron"/></button>
                                <button className={`${styles.item_three} ${activeButton==3 ? styles.active : ''}`} onClick={() => setActiveButton(3)}><Icon name="arrow"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.createbut} disabled={disableAddButton} onClick={addTask}>Создать</button>
                    <button className={styles.closebut} onClick={changeVisible}>Отмена</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.layout}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Редактирование</h1>
                    <div>
                        <div className={styles.subtitle}>
                            <p className={styles.p}>Название</p>
                            <p className={styles.star}>*</p>
                        </div>
                        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Название задачи' className={styles.input} ref={inputRef} />
                        <button className={styles.cross} onClick={crossClick}>
                            <Icon name="cross" className={styles.crossimg} />
                        </button>
                    </div>
                </div>
                <div className={styles.priority}>
                    <div className={styles.main}>
                        <div className={styles.content}>
                            <p className={styles.prioryp}>Приоритет</p>
                            <div className={styles.items}>
                                <button className={`${styles.item_one} ${activeButton==1 ? styles.active : ''}`} onClick={() => setActiveButton(1)}><Icon name="minus"/></button>
                                <button className={`${styles.item_two} ${activeButton==2 ? styles.active : ''}`} onClick={() => setActiveButton(2)}><Icon name="chevron"/></button>
                                <button className={`${styles.item_three} ${activeButton==3 ? styles.active : ''}`} onClick={() => setActiveButton(3)}><Icon name="arrow"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.savebut} disabled={disableSaveButton()} onClick={editTask}>Сохранить</button>
                    <button className={styles.closebut} onClick={changeVisible}>Отмена</button>
                    <button className={styles.deletebut} onClick={deleteTask}>
                        <Icon name="trash" />
                    </button>
                </div>
            </div>
        );}
}