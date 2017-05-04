import React from 'react';
import StripeSquare from './StripeSquare';
import { HorizontalSquare, HorizontalStripe } from './styles/Stripe.css';

function renderSquare(i) {
  const bigNumber = 10000;
  return (
    <div
      key={i === null ? -1 : i + bigNumber}
      className={HorizontalSquare}
    >
      <StripeSquare black={false}>
        {i === null ? null : i + 1}
      </StripeSquare>
    </div>
  );
}

export default function XStripe() {
  const size = 8;
  const stripe = [renderSquare(null)];
  for (let i = 0; i < size; i += 1) {
    stripe.push(renderSquare(i));
  }
  return (<div
    className={HorizontalStripe}
  >
    { stripe }
  </div>);
}

