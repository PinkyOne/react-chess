import React from 'react';
import PropTypes from 'prop-types';
import { BlackSquare, WhiteSquare } from './styles/Square.css';

export default function Square(props) {
  return (
    <div
      className={props.black ? BlackSquare : WhiteSquare}
    > { props.children }</div>);
}

Square.propTypes = {
  black: PropTypes.bool.isRequired,
  children: React.PropTypes.node,
};

Square.defaultProps = {
  children: null,
};
