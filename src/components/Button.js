import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    render() {
        return (
            <div>
                <input type="button"
                       name="Ok"
                       onClick={this.props.handleChange}
                />
            </div>
        );
    }
}

Button.propTypes = {
    handleChange: PropTypes.func.isRequired
};