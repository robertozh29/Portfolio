import PropTypes from 'prop-types';

export default function Example({ title }){
    return (
        <div className="home">
            <h1>Welcome to {title ? title : "Default"}</h1>
        </div>
    )
}

Example.propTypes = {
    title: PropTypes.string.isRequired
}