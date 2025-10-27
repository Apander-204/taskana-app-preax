import Button from "../button/Button";
import Logo from "../logo/Logo";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import styles from './header.module.css';


export default function Header({setVisible, visible, inputRef, setAction}) {
    return(
        <header className={styles.layout}>
            <Logo className={styles.logo} />
            <div className={styles.right}>
                <Button setVisible={setVisible} visible={visible} inputRef={inputRef} setAction={setAction}/>
                <ThemeSwitcher />
            </div>
        </header>
    );
}