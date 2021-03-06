import React from 'react';
import PropTypes from 'prop-types';

export default function TextField(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

TextField.propsTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

