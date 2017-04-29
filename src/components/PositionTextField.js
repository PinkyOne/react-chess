import React from 'react';
import PropTypes from 'prop-types';

export default function PositionTextField(props) {
    return (
        <div>
            <input
                type="text"
                value={props.knightPosition.text}
                onChange={props.onChange}
            />
        </div>
    );
}

PositionTextField.propsTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired
};