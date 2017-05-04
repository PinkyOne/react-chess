import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import Button from '../components/Button';
import PositionTextField from '../components/PositionTextField';
import { moveKnight, changeText } from '../actions';
import { LETTERS } from '../constants/Strings';
import { canMoveKnight } from './helpers/MoveHelper';

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
    const toY = LETTERS.indexOf(positionText[0].toUpperCase());
    const toX = parseInt(positionText[1], 10) - 1;

    const newPosition = { toX, toY };

    if (!canMoveKnight(this.props.knightPosition, newPosition)) {
      const { x, y } = this.props.knightPosition;
      if (toX !== x || toY !== y) {
        alert('Knight move must be like a L');
      }
      return false;
    }
    this.props.moveKnight(toX, toY);
    return false;
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
