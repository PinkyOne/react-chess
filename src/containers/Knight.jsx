import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import ItemTypes from '../constants/ItemTypes';
import { IMG_URL } from '../constants/Strings';

import styles from './styles/Knight.css';

const knightSource = {
  beginDrag() {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
class Knight extends Component {
  componentDidMount() {
    const img = new Image();
    img.src = IMG_URL;
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className={isDragging ? styles.DraggingKnight : styles.Knight}>
        ♘
      </div>);
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default Knight;
