import styles from './Header.module.scss'


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>
                <nav className={styles.navList}>
                        <a href=""><button>Main</button></a>
                        <a href=""><button>About</button></a>
                        <a href=""><button>Login</button></a>
                </nav>
        </header>
    )
}