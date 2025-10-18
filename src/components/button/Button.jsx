import styles from './button.module.css'
import Icon from '../icon/Icon';

export default function Button({ setVisible, visible, inputRef }) {

    const changeVisible = () => {
        setVisible(true);
        inputRef.current.focus();
    }

    return(
        <button className={styles.button} onClick={changeVisible} >
            <Icon name='plussecond' className={styles.image} />
            <p className={styles.text}>Создать</p>
        </button>
    );
}