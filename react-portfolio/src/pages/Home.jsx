import SocialMedia from "../components/SocialMedia/SocialMedia";
import styles from "./pages.module.css"

export default function Home(){
    return (
        <div className={styles.page}>
            <SocialMedia className={styles.social}/>
            <div className={styles.content}>
                <h1>Welcome Home</h1>
            </div>  
        </div>
    )
}