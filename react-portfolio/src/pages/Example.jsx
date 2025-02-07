import PropTypes from 'prop-types';
import styles from "./pages.module.css"

export default function Example({ title }){
    return (
        <div className={ styles.page }>
            <div className={ styles.content }>
                <h1>Welcome to {title ? title : "Default"}</h1>
            </div>
        </div>
    )
}

Example.propTypes = {
    title: PropTypes.string.isRequired
}