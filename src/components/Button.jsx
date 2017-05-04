import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <input
      type="button"
      value="Move"
      onClick={props.handleChange}
    />
  );
}

Button.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

