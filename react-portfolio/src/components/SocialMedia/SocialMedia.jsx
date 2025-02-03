import styles from './SocialMedia.module.css';
import LinkedinLogo from '../../assets/Linkedin.jsx';
import InstagramLogo from '../../assets/Instagram.jsx';
import GitHubLogo from '../../assets/Github.jsx';

export default function SocialMedia(){
    return (
        <div className={`${styles.social} social`}>
            <ul>
                <li>
                    <a href="https://github.com/robertozh29" target="_blank"> 
                        <GitHubLogo className={styles.logo} />
                    </a>
                </li>
                <li> 
                    <a href="https://www.linkedin.com/in/roberto-zepeda-hipólito/"  target="_blank">
                        <LinkedinLogo className={styles.logo} />
                    </a>
                </li>  
                <li>
                    <a href="https://www.instagram.com/roberto__zepeda/" target="_blank">
                        <InstagramLogo className={styles.logo} />
                    </a>
                </li> 
                <li>
                    <div className={styles.line}></div>
                </li>
            </ul>
        </div>
    )
}