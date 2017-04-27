import React, {Component} from 'react';

export default class StripeSquare extends Component {
    render() {
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
                >{this.props.children}</div>
            </div>
        );
    }
}
