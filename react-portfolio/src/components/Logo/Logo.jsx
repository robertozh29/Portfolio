import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo(){
    return (
        <div className={styles.logo}>
            <Link to="/">
                <div className={styles.square}>
                    <p>R</p>
                </div>
            </Link>
        </div>
    )
}