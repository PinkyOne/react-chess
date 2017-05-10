import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import Button from '../components/Button';
import { changeName, makeASandwichWithSecretSauce } from '../actions';
import TextField from '../components/sandwichShop/TextField';
import Sandwich from '../components/sandwichShop/Sandwich';
import SandwichShopSign from '../components/sandwichShop/SandwichShopSign';
import styles from './styles/SandwichShop.css';

const mapStateToProps = state => ({
  name: state.sandwich.name,
  message: state.sandwich.message,
  isMade: state.sandwich.isMade,
});

const mapDispatchToProps = { changeName, makeASandwichWithSecretSauce };

@connect(mapStateToProps, mapDispatchToProps)
class SandwichShop extends Component {
  @autobind
  onChangeNameTextField(event) {
    const value = event.target.value;
    this.props.changeName(value);
  }

  @autobind
  makeSandwich() {
    this.props.makeASandwichWithSecretSauce(this.props.name);
  }
  render() {
    const buttonValue = 'Make sandwich';
    return (
      <div className={styles.SandwichShop}>
        <SandwichShopSign />
        <TextField
          value={this.props.name}
          onChange={this.onChangeNameTextField}
        />
        <TextField
          value={this.props.message}
        />
        <Button
          handleClick={this.makeSandwich}
          value={buttonValue}
        />
        <Sandwich isMade={this.props.isMade} />
      </div>
    );
  }
}

SandwichShop.propTypes = {
  isMade: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  makeASandwichWithSecretSauce: PropTypes.func.isRequired,
};

export default SandwichShop;
