import React from 'react';
import StripeSquare from "./StripeSquare";

function renderSquare(i) {
    let percents = 100 / 8;
    percents = percents.toString() + '%';
    return (
        <div key={i}
             style={{width: '100%', height: percents}}>
            <StripeSquare black={false}>
                {i}
            </StripeSquare>
        </div>
    );
}

export default function YStripe() {
    const size = 8;
    const stripe = [];
    const letters = 'ABCDEFGH';
    for (let i = 0; i < size; i++) {
        stripe.push(renderSquare(letters[i]));
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            position: 'relative',
            flexDirection: 'column',
            width: '11.11111%',
            height: '100%'
        }}>
            {stripe}
        </div>
    );
}
