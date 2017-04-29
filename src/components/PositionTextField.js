import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function PositionTextField(props) {
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

export default connect(state => state)(PositionTextField);

PositionTextField.propsTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    onChange: PropTypes.func.isRequired
};