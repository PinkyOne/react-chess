import React from 'react';
import PropTypes from 'prop-types';

export default function PositionTextField(props) {
  return (
    <input
      type="text"
      size="10"
      value={props.knightPosition.text}
      onChange={props.onChange}
    />
  );
}

PositionTextField.propsTypes = {
  knightPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

