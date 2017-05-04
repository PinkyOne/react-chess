import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import Button from '../components/Button';
import PositionTextField from '../components/PositionTextField';
import { moveKnight, changeText } from '../actions';
import { LETTERS } from '../constants/Strings';

const mapStateToProps = state => state;
const mapDispatchToProps = { moveKnight, changeText };

@connect(mapStateToProps, mapDispatchToProps)
class ControlPanel extends Component {
  static checkPositionText(positionText) {
    const y = LETTERS.indexOf(positionText[0].toUpperCase());
    const x = parseInt(positionText[1], 10) - 1;
    return y >= 0 && x > 0 && x <= 8;
  }

  @autobind
  onChangeTextField(event) {
    const value = event.target.value;
    this.props.changeText(value);
  }

  @autobind
  setKnightPosition() {
    const positionText = this.props.knightPosition.text;
    if (!ControlPanel.checkPositionText(positionText)) {
      alert('Wrong position');
      return false;
    }
    const newY = LETTERS.indexOf(positionText[0].toUpperCase());
    const newX = parseInt(positionText[1], 10) - 1;
    if (!this.canMoveKnight(newX, newY)) {
      const { x, y } = this.props.knightPosition;
      if (newX !== x || newY !== y) {
        alert('Knight move must be like a L');
      }
      return false;
    }
    this.props.moveKnight(newX, newY);
    return false;
  }

  canMoveKnight(toX, toY) {
    const { x, y } = this.props.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }

  render() {
    return (
      <div>
        <PositionTextField
          knightPosition={this.props.knightPosition}
          onChange={this.onChangeTextField}
        />
        <Button
          handleChange={this.setKnightPosition}
        />
      </div>
    );
  }
}

ControlPanel.propTypes = {
  knightPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  moveKnight: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

export default ControlPanel;
