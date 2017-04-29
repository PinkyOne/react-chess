import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Button from "../components/Button";
import PositionTextField from "../components/PositionTextField";
import {moveKnight, changeText} from "../actions";

class ControlPanel extends Component {
    canMoveKnight(toX, toY) {
        const {x, y} = this.props.knightPosition;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

    setKnightPosition() {
        const positionText = this.props.knightPosition.text;
        if (!positionText)return;
        const letters = 'ABCDEFGH';
        const newY = letters.indexOf(positionText[0]);
        const newX = parseInt(positionText[1], 10) - 1;
        if (!this.canMoveKnight(newX, newY)) {
            const {x, y} = this.props.knightPosition;
            if (newX !== x || newY !== y)
                alert('Knight move must be like a L');
            return false;
        }
        this.props.moveKnight(newX, newY);
    }

    onChangeTextField(event) {
        const value = event.target.value;
        this.props.changeText(value);
    }

    render() {
        return (
            <div>
                <PositionTextField
                    knightPosition={this.props.knightPosition}
                    onChange={this.onChangeTextField.bind(this)}/>
                <Button handleChange={this.setKnightPosition.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = state => state;

ControlPanel.propTypes = {
    knightPosition: PropTypes.object.isRequired,
    moveKnight: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {moveKnight, changeText})(ControlPanel);