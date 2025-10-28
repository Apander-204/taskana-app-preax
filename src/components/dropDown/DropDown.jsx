import styles from './dropDown.module.css';
import Icon from '../icon/Icon';
import sortTasks from '../../utils/SortTasks';
import { useState } from 'react';

export default function DropDown({actualSort, setActualSort, tasks}) {

    const sortList = {
        fromimportant: { text: 'Приоритету', icon: 'fromimportant' },
        ofimportance: { text: 'Приоритету', icon: 'ofimportance' },
        atoz: { text: 'Алфавиту', icon: 'atoz' },
        ztoa: { text: 'Алфавиту', icon: 'ztoa' },
        dateto: { text: 'Дате создания', icon: 'dateto' },
        datefrom: { text: 'Дате создания', icon: 'datefrom' },
        updateto: { text: 'Дате обновления', icon: 'updateto' },
        updatefrom: { text: 'Дате обновления', icon: 'updatefrom' }
    };

    const changeActualSort = (name) => {
        setActualSort(name);
        sortTasks(tasks, actualSort);
        setMenuStyle('');
    };

    const [menuStyle, setMenuStyle] = useState('');

    return(
        <div className={styles.layout}>
            <button className={`${styles.openmenu} ${menuStyle == 'open' ? styles.openmenuactive : ''}`} onClick={() => {setMenuStyle(menuStyle == '' ? 'open' : '')}}>
                <Icon name={actualSort} className={styles.actualsort} />
                <p className={styles.openmenutext} >По {sortList[actualSort].text.toLowerCase()}</p>
                <Icon name="arrowbottom" className={styles.arrowbottom} />
            </button>
            
            <div className={`${styles.menu} ${menuStyle=='open' ? styles.open : ''}`}>
                <div className={styles.title}>
                    <Icon name="filter" />
                    <p>Сортировка по:</p>
                </div>

                <ul className={styles.content}>
                    <li className={`${styles.item} ${actualSort=='fromimportant' ? styles.active : ''}`} onClick={() => changeActualSort("fromimportant")} tabIndex={1}>
                        <Icon name="fromimportant" className={styles.itemicon}/>
                        <p>Приоритету</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='ofimportance' ? styles.active : ''}`} onClick={() => changeActualSort("ofimportance")} tabIndex={1}>
                        <Icon name="ofimportance" className={styles.itemicon}/>
                        <p>Приоритету</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='atoz' ? styles.active : ''}`} onClick={() => changeActualSort("atoz")} tabIndex={1}>
                        <Icon name="atoz" className={styles.itemicon}/>
                        <p>Алфавиту</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='ztoa' ? styles.active : ''}`} onClick={() => changeActualSort("ztoa")} tabIndex={1}>
                        <Icon name="ztoa" className={styles.itemicon}/>
                        <p>Алфавиту</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='dateto' ? styles.active : ''}`} onClick={() => changeActualSort("dateto")} tabIndex={1}>
                        <Icon name="dateto" className={styles.itemicon}/>
                        <p>Дате создания</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='datefrom' ? styles.active : ''}`} onClick={() => changeActualSort("datefrom")} tabIndex={1}>
                        <Icon name="datefrom" className={styles.itemicon}/>
                        <p>Дате создания</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='updateto' ? styles.active : ''}`} onClick={() => changeActualSort("updateto")} tabIndex={1}>
                        <Icon name="updateto" className={styles.itemicon}/>
                        <p>Дате обновления</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                    <li className={`${styles.item} ${actualSort=='updatefrom' ? styles.active : ''}`} onClick={() => changeActualSort("updatefrom")} tabIndex={1}>
                        <Icon name="updatefrom" className={styles.itemicon}/>
                        <p>Дате обновления</p>
                        <Icon name="check" className={styles.checkicon} />
                    </li>
                </ul>
            </div>
        </div>
    );
}