import styles from './taskEditor.module.css'
import Icon from '../icon/Icon';
import GenerateId from '../../utils/GenerateId';
import { useState, useEffect } from 'react';

export default function TaskEditor( {setTasks, setVisible, inputRef} ) {

    const [inputValue, setInputValue] = useState('');
    const disableButton = inputValue.trim() == '';

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
        setInputValue('');
        changeVisible();
    };

    const [activeButton, setActiveButton] = useState(1);

    const changeVisible = () => {
        setVisible(false);
        setInputValue('');
        setActiveButton(1);
    }

    const crossClick = () => {
        setInputValue('');
    }

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
                <button className={styles.createbut} disabled={disableButton} onClick={addTask}>Создать</button>
                <button className={styles.closebut} onClick={changeVisible}>Отмена</button>
            </div>
        </div>
    );
}