import styles from './SocialMedia.module.css'

export default function SocialMedia(){
    return (
        <div className={styles.container}>
        <ul>
            <li>
                <a href="https://github.com/robertozh29" target="_blank"> 
                    Github
                </a>
            </li>
            <li> 
                <a href="https://www.linkedin.com/in/roberto-zepeda-hipólito/"  target="_blank">
                    Linkedin
                </a>
            </li>  
            <li>
                <a href="https://www.instagram.com/roberto__zepeda/" target="_blank">
                    Instagram
                </a>
            </li> 
            <li>
                <div className={styles.line}></div>
            </li>
        </ul>
    </div>
    )
}