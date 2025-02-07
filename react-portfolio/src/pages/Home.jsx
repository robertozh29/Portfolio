import SocialMedia from "../components/SocialMedia/SocialMedia";
import Lightsaber from "../components/Lightsaber/Lightsaber";
import styles from "./pages.module.css"

export default function Home(){
    return (
        <div className={styles.page}>
            <SocialMedia className={styles.social}/>
            <Lightsaber className={styles.lightsaber}/>
            <div className={styles.content}>
                <h1>Welcome Home</h1>
            </div>  

        </div>
    )
}