import Button from "../button/Button";
import Logo from "../logo/Logo";
import styles from './header.module.css';

export default function Header() {
    return(
        <header className={styles.layout}>
            <Logo className={styles.logo} />
            <Button className={styles.button} />
        </header>
    );
}