import styles from'./Heading.module.css';

export function Heading(){
    return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá mundo</h1>;//utilizando essas crazes você adiciona mais de um css module
}