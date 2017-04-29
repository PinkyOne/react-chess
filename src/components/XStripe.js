import React, {Component} from 'react';
import StripeSquare from "./StripeSquare";

export default class XStripe extends Component {
    static renderSquare(i) {
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

    render() {
        const size = 8;
        const stripe = [XStripe.renderSquare(null)];
        for (let i = 0; i < size; i++) {
            stripe.push(XStripe.renderSquare(i));
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
}