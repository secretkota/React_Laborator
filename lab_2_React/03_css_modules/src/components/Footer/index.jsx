import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>&reg; Stanislav IA2303 &copy;{new Date().getFullYear()}</p>
        </footer>
    )
}