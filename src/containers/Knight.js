import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from '../constants/ItemTypes';
import {DragSource} from 'react-dnd';
import {IMG_URL} from "../constants/Strings";

const knightSource = {
    beginDrag() {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
    componentDidMount() {
        const img = new Image();
        img.src = IMG_URL;
        img.onload = () => this.props.connectDragPreview(img);
    }

    render() {
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                ♘
            </div>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);