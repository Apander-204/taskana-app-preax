import styles from './button.module.css'
import Icon from '../icon/Icon';

export default function Button({ setVisible, visible }) {

    const changeVisible = () => {
        setVisible(true);
    }

    return(
        <button className={styles.button} onClick={changeVisible} >
            <Icon name='plussecond' className={styles.image} />
            <p className={styles.text}>Создать</p>
        </button>
    );
}