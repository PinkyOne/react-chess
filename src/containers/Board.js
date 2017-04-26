import React, {Component, PropTypes} from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import moveKnight from '../actions'
import {connect} from "react-redux";

class Board extends Component {
    canMoveKnight(toX, toY) {
        const [x, y] = this.props.position;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div key={i}
                 style={{width: '12.5%', height: '12.5%'}}>
                <BoardSquare
                    canMoveKnight={this.canMoveKnight}
                    moveKnight={this.moveKnight}
                    x={x}
                    y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.position;
        if (x === knightX && y === knightY) {
            return <Knight />;
        }
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: '99%',
                height: '98%',
                display: 'inline-flex',
                flexWrap: 'wrap',
                'overflow-y': 'auto',
                position: 'absolute'
            }}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    moveKnight: PropTypes.func.isRequired
};

const mapStateToProps = state => state

Board = DragDropContext(HTML5Backend)(Board);
Board = connect(mapStateToProps, {moveKnight})(Board);

export default Board