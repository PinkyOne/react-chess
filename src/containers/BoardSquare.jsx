import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Square from '../components/Square';
import ItemTypes from '../constants/ItemTypes';

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
    return (<div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />);
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Square black={black}>
          {this.props.children}
        </Square>
        { isOver && !canDrop && BoardSquare.renderOverlay('red') }
        {!isOver && canDrop && BoardSquare.renderOverlay('yellow') }
        { isOver && canDrop && BoardSquare.renderOverlay('green') }
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

