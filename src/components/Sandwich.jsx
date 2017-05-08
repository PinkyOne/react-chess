import React from 'react';
import PropTypes from 'prop-types';
import { SANDWICH_IMG_URL, SANDWICH_IMG_ALT_TEXT } from '../constants/Strings';

export default function PositionTextField(props) {
  return (
    props.isMade ?
      <img
        src={SANDWICH_IMG_URL}
        alt={SANDWICH_IMG_ALT_TEXT}
      />
      : null
  );
}

PositionTextField.propsTypes = {
  isMade: PropTypes.bool.isRequired,
};
