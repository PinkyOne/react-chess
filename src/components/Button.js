import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <div>
            <input type="button"
                   name="Ok"
                   onClick={props.handleChange}
            />
        </div>
    );
}

Button.propTypes = {
    handleChange: PropTypes.func.isRequired
};