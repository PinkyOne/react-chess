import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import moveKnight from '../actions'
import {changeText} from "../actions/index";

class PositionTextField extends Component {
    onChangeTextField(event) {
        const value = event.target.value;
        this.props.changeText(value);
    }

    getPositionText(position) {
        if (!position)return '';
        const {x, y} = position;
        const letters = 'ABCDEFGH';
        return letters[y] + (x + 1);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.positionText.text}
                    onChange={this.onChangeTextField.bind(this)}
                    ref="positionTextField"
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
    positionText: PropTypes.string,
    changeText: PropTypes.func.isRequired
};