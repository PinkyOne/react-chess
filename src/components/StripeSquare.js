import React from 'react';

export default function StripeSquare(props) {
    return (
        <div style={{
            backgroundColor: 'IndianRed',
            color: 'IndianRed',
            width: '100%',
            height: '100%'
        }}>
            <div
                style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#000',
                }}
            >{props.children}</div>
        </div>
    );
}

