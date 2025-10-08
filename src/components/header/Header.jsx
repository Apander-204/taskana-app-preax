import Button from "../button/Button";
import Logo from "../logo/Logo";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import styles from './header.module.css';


export default function Header() {
    return(
        <header className={styles.layout}>
            <Logo className={styles.logo} tabIndex={0} />
            <div className={styles.right}>
                <Button />
                <ThemeSwitcher />
            </div>
        </header>
    );
}