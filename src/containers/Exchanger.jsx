import React, { Component } from 'react';
import { connect } from 'react-redux';

import Converter from 'components/Converter';
import Input from 'components/Input';

import * as actions from 'actions';

class Exchanger extends Component {
  handleExchange (e) {
    let valueBase, valueTo;
    if (this.props.inverted) {
      const currencyTo = this.props.rates[this.props.currencyTo] ? this.props.rates[this.props.currencyTo] : 1;
      
      valueBase = String(e.target.value);
      valueTo = Math.round((e.target.value / this.props.rates[this.props.currencyBase] * currencyTo) * 100) / 100;
    } else {
      valueBase = String(e.target.value);
      valueTo = Math.round((e.target.value * this.props.rates[this.props.currencyTo]) * 100) / 100;
    }
    this.props.onHandleExchange(valueBase, valueTo)
  }
  
  handleInvert () {
    let currentState = this.props.inverted;
    this.props.onHandleInvert(!currentState, this.props.currencyBase, this.props.currencyTo, this.props.valueBase, this.props.valueTo);
  }
  
  render() {
    return (
      <Converter 
        currencyBase={this.props.currencyBase}
        currencyTo={this.props.currencyTo}
        valueBase={this.props.valueBase}
        valueTo={this.props.valueTo}
        onChange={this.handleExchange.bind(this)}
        onReverse={this.handleInvert.bind(this)}
        openCurrencyList={this.props.openCurrencyList}
      />
    )
  }
}

export default connect(
  state => ({
    rates: state.converter.rates,
    inverted: state.converter.inverted,
    currencyBase: state.converter.currencyBase,
    currencyTo: state.converter.currencyTo,
    valueBase: state.converter.valueBase,
    valueTo: state.converter.valueTo,
  }),
  dispatch => ({
    onHandleInvert: (state, currencyBase, currencyTo, valueBase, valueTo) => {
      dispatch(actions.invertConverter(state, currencyBase, currencyTo, valueBase, valueTo))
    },
    onHandleExchange: (valueBase, valueTo) => {
      dispatch(actions.exchange(valueBase, valueTo))
    },
  })
)(Exchanger)