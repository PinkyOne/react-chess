import React from 'react';
import PropTypes from 'prop-types';

export default function PositionTextField(props) {
    return (
        <input
            type="text"
            size="10"
            value={props.knightPosition.text}
            onChange={props.onChange}
        />
    );
}

PositionTextField.propsTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired
};