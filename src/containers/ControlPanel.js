import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from "react-redux";
import Button from "../components/Button";
import PositionTextField from "../components/PositionTextField";
import moveKnight from '../actions'

class ControlPanel extends Component {
    canMoveKnight(toX, toY) {
        const {x, y} = this.props.knightPosition;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

    getPositionText(position) {
        const {x, y} = position;
        const letters = 'ABCDEFGH';
        return letters[y] + x;
    }

    setTextField(text) {
        this.setState({positionText: text});
    }

    setKnightPosition() {
        const positionText = this.props.positionText.text;
        if (!positionText)return;
        const letters = 'ABCDEFGH';
        const y = letters.indexOf(positionText[0]);
        const x = parseInt(positionText[1], 10) - 1;
        if (!this.canMoveKnight(x, y)) {
            alert('Knight move must be like a L');
            return false;
        }
        this.props.moveKnight(x, y);
        this.setTextField(positionText);
    }

    render() {
        return (
            <div>
                <PositionTextField
                    knightPosition={this.props.knightPosition}
                />
                <Button handleChange={this.setKnightPosition.bind(this)}/>
            </div>
        );
    }
}


const mapStateToProps = state => state;

ControlPanel.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    moveKnight: PropTypes.func.isRequired,
    positionText: PropTypes.string.isRequired
};

export default connect(mapStateToProps, {moveKnight})(ControlPanel);