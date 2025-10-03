import styles from './themeSwitcher.module.css'
import { useTheme } from '../contexts/ThemeContext';
import Icon from '../icon/Icon';

export default function ThemeSwitcher() {

    const {theme, switchTheme} = useTheme();

    return(
        <div className={`${styles.layout} ${styles[theme]}`} tabIndex={0}>
            <div className={styles.sun} onClick={() => switchTheme('sun')}>
                <Icon name='sun' />
            </div>

            <div className={styles.moon} onClick={() => switchTheme('moon')}>
                <Icon name='moon' />
            </div>
        </div>
    );

}