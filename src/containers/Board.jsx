import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { moveKnight } from '../actions';

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
    const { x, y } = this.props.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }


  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
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

    return (<div
      style={{
        width: '88.88888%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      }}
    > { squares }
    </div>);
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
