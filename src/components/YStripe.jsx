import React from 'react';
import StripeSquare from './StripeSquare';
import { LETTERS } from '../constants/Strings';
import { VerticalSquare, VerticalStripe } from './styles/Stripe.css';

function renderSquare(i) {
  return (
    <div
      key={i}
      className={VerticalSquare}
    >
      <StripeSquare black={false}>
        {i}
      </StripeSquare>
    </div>
  );
}

export default function YStripe() {
  const size = 8;
  const stripe = [];
  for (let i = 0; i < size; i += 1) {
    stripe.push(renderSquare(LETTERS[i]));
  }
  return (
    <div className={VerticalStripe}>
      { stripe }
    </div>);
}

