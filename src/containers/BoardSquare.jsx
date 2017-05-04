import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import Square from '../components/Square';
import ItemTypes from '../constants/ItemTypes';

import styles, { BoardSquareOverlayGreen,
  BoardSquareOverlayRed,
  BoardSquareOverlayYellow } from './styles/BoardSquare.css';

const squareTarget = {
  canDrop(props) {
    const { canMoveKnight, x, y } = props;
    return canMoveKnight(x, y);
  },

  drop(props) {
    const { moveKnight, x, y } = props;
    moveKnight(x, y);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
class BoardSquare extends Component {
  static renderOverlay(color) {
    return (<div className={color} />);
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className={styles.BoardSquare}>
        <Square black={black}>
          {this.props.children}
        </Square>
        { isOver && !canDrop && BoardSquare.renderOverlay(BoardSquareOverlayRed) }
        {!isOver && canDrop && BoardSquare.renderOverlay(BoardSquareOverlayYellow) }
        { isOver && canDrop && BoardSquare.renderOverlay(BoardSquareOverlayGreen) }
      </div>);
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  children: PropTypes.node,
};

BoardSquare.defaultProps = {
  children: null,
};

export default BoardSquare;

