import styles from'./Heading.module.css';

export function Heading(props){
    console.log(props)
    return <h1 className={`${styles.heading} ${styles.cyan}`}>{props.children}</h1>;//utilizando essas crazes você adiciona mais de um css module //// ao utilizar chaves dentro do jsx eu indico que vou usar JavaScript
    console.log("oi")
}