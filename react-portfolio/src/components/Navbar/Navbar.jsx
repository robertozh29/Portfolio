import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import Logo from '../Logo/Logo.jsx'
import styles from './Navbar.module.css'


export default function Navbar(){
    return (
        <div className={styles.container}>
            <Logo />
            <nav className={styles.navbar}>
                <ul>
                    <li>1.0 <Link to="/">Home</Link></li>
                    <li>2.0 <Link to="/about">About</Link></li>
                    <li>3.0 <Link to="/projects">Projects</Link></li>
                    <li>4.0 <Link to="/contact">Contact</Link></li>
                    <li>5.0 <Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    current: PropTypes.string
}