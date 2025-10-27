import styles from './themeSwitcher.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Icon from '../icon/Icon';

export default function ThemeSwitcher() {

    const {theme, switchTheme} = useTheme();

    const switcher = () => {
        if(theme=='light') switchTheme('moon');
        else switchTheme('sun');
    }

    return(
        <button className={`${styles.layout} ${styles[theme]}`} onClick={switcher}>
            <div className={styles.sun}>
                <Icon name='sun' />
            </div>

            <div className={styles.moon}>
                <Icon name='moon' />
            </div>
        </button>
    );

}