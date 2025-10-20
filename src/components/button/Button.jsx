import styles from './button.module.css'
import Icon from '../icon/Icon';

export default function Button({ setVisible, visible, inputRef }) {

    const changeVisible = () => {
        setVisible(true);
        
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
    }

    return(
        <button className={styles.button} onClick={changeVisible} >
            <Icon name='plussecond' className={styles.image} />
            <p className={styles.text}>Создать</p>
        </button>
    );
}