import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.handleClick}
    />
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

