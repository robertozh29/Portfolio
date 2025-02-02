import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({ current }){
    return (
        <div className="navbar">
            { current }
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