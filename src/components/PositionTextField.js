import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {changeText} from "../actions";

class PositionTextField extends Component {
    onChangeTextField(event) {
        const value = event.target.value;
        this.props.changeText(value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.knightPosition.text}
                    onChange={this.onChangeTextField.bind(this)}
                />
            </div>
        );
    }
}

export default connect(state => state, {changeText})(PositionTextField);

PositionTextField.propsTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    changeText: PropTypes.func.isRequired
};