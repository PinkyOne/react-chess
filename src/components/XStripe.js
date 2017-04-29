import React from 'react';
import StripeSquare from "./StripeSquare";

function renderSquare(i) {
    const bigNumber = 10000;
    let percents = 100 / 9;
    percents = percents.toString() + '%';
    return (
        <div key={i === null ? -1 : i + bigNumber}
             style={{width: percents, height: '100%'}}>
            <StripeSquare black={false}>
                {i === null ? null : i + 1}
            </StripeSquare>
        </div>
    );
}

export default function XStripe() {
    const size = 8;
    const stripe = [renderSquare(null)];
    for (let i = 0; i < size; i++) {
        stripe.push(renderSquare(i));
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'no-wrap',
            position: 'relative',
            width: '100%',
            height: '11.11111%'
        }}>
            {stripe}
        </div>
    );
}