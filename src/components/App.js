import React, {Component} from 'react';
import Board from '../containers/Board'
import XStripe from "./XStripe";
import YStripe from "./YStripe";

export default class App extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexWrap: 'no-wrap',
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'no-wrap',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '80%',
                    height: '100%'
                }
                }>
                    <XStripe/>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'no-wrap',
                        position: 'relative',
                        width: '100%',
                        height: '88.88888%'
                    }}>
                        <YStripe/>
                        <Board />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'no-wrap',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '20%',
                    height: '100%'
                }}>

                </div>
            </div>
        );
    }
}