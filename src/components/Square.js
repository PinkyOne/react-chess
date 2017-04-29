import React from 'react';
import PropTypes from 'prop-types';

export default function Square(props) {
    const {black} = props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    return (
        <div style={{
            backgroundColor: fill,
            color: stroke,
            width: '100%',
            height: '100%'
        }}>
            {props.children}
        </div>
    );
}

Square.propTypes = {
    black: PropTypes.bool
};