import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { moveKnight } from '../actions';
import moveHelper from '../helpers/MoveHelper';

import styles from './styles/Board.css';

const mapStateToProps = state => state;
const mapDispatchToProps = { moveKnight };

@connect(mapStateToProps, mapDispatchToProps)
@DragDropContext(HTML5Backend)
class Board extends Component {
  @autobind
  setKnightPosition(x, y) {
    if (this.canMoveKnight(x, y)) {
      this.props.moveKnight(x, y);
    }
    return false;
  }

  @autobind
  canMoveKnight(toX, toY) {
    return moveHelper(this.props.knightPosition, { toX, toY });
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div
        key={i}
        className={styles.Square}
      >
        <BoardSquare
          canMoveKnight={this.canMoveKnight}
          moveKnight={this.setKnightPosition}
          x={x}
          y={y}
        >
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(kX, kY) {
    const { x, y } = this.props.knightPosition;
    if (x === kX && y === kY) {
      return <Knight />;
    }
    return false;
  }

  render() {
    const squares = [];
    const size = 8 * 8;
    for (let i = 0; i < size; i += 1) {
      squares.push(this.renderSquare(i));
    }

    return (<div className={styles.Board}> { squares } </div>);
  }
}

Board.propTypes = {
  knightPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  moveKnight: PropTypes.func.isRequired,
};


export default Board;
