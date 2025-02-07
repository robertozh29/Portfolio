import PropTypes from 'prop-types'

import styles from './Lightsaber.module.css'
import handle from '../../assets/handle.png'

export default function Lightsaber({ className }){
    return(
        <div className={`${styles.lightsaber} ${className}`} id="lightsaber">
            <div className={styles.light_container} id="ligh-container">
                <div className={styles.light} id="light"></div>
            </div>
            <img src={handle} alt="sword handle" />
        </div>
    )
}

Lightsaber.propTypes = {
    className: PropTypes.string
}

