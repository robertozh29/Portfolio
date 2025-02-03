import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function Navbar(){
    return (
        <div className={styles.container}>
            <p>Hola</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    current: PropTypes.string.isRequired
}