import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Button from "../components/Button";
import PositionTextField from "../components/PositionTextField";
import {moveKnight, changeText} from "../actions";
import {LETTERS} from '../constants/Strings'

class ControlPanel extends Component {
    static checkPositionText(positionText) {
        const y = LETTERS.indexOf(positionText[0].toUpperCase());
        const x = parseInt(positionText[1], 10) - 1;
        return y >= 0 && x > 0 && x <= 8;
    }

    canMoveKnight(toX, toY) {
        const {x, y} = this.props.knightPosition;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

    setKnightPosition() {
        const positionText = this.props.knightPosition.text;
        if (!ControlPanel.checkPositionText(positionText)) {
            alert('Wrong position');
            return false;
        }
        const newY = LETTERS.indexOf(positionText[0].toUpperCase());
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

ControlPanel.propTypes = {
    knightPosition: PropTypes.object.isRequired,
    moveKnight: PropTypes.func.isRequired
};

const mapStateToProps = state => state;
const mapDispatchToProps = {moveKnight, changeText};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);