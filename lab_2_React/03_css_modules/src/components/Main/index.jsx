import styles from './Main.module.scss'

export default function Main(){
    return(
        <>
            <main className={styles.main}>
                <div className={styles.photo}>
                    <p className={styles.photo_text}>Radio Test</p>
                </div>
            </main>
        </>
    )
}