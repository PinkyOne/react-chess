import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/StripeSquare.css';

export default function StripeSquare(props) {
  return (
    <div className={styles.StripeSquare}>
      <div className={styles.SquareText}>
        { props.children }
      </div>
    </div>);
}

StripeSquare.propTypes = {
  children: PropTypes.node,
};

StripeSquare.defaultProps = {
  children: null,
};
