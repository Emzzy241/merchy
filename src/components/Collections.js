import React from "react";
import PropTypes from "prop-types"

function Collections(props) {
    return (
        <React.Fragment>
            {/* <div className={props.image}> */}
            <div className="collections-container">
                <div className="collections">
                <h3>{props.title}</h3>
                <h6>{props.image}</h6>
                <button>{props.buttonText}</button>
            </div>
            </div>
        </React.Fragment>
    );
}

Collections.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default Collections;