import React, { Component } from 'react';
import { connect } from 'react-redux';

import Converter from 'components/Converter';
import Input from 'components/Input';

import * as actions from 'actions';

class Exchanger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueBase: this.props.valueBase,
      valueTo: Math.round(this.props.valueTo * 100) / 100,
    }
  }
  
  handleExchange (e) {
    this.setState({
      valueBase: e.target.value,
      valueTo: Math.round((e.target.value * this.props.valueTo) * 100) / 100,
    })
  }

  handleExchangeInverted (e) {
    this.setState({
      valueBase: Math.round((e.target.value / this.props.valueTo) * 100) / 100,
      valueTo: e.target.value,
    })
  }
  
  handleInvert () {
    let currentState = this.props.inverted;
    this.props.onHandleInvert(!currentState);
  }
  
  render() {
    return (
      <Converter 
        currencyBase={this.props.inverted 
          ? this.props.currencyTo
          : this.props.currencyBase}
        currencyTo={this.props.inverted
          ? this.props.currencyBase
          : this.props.currencyTo}
        valueBase={this.props.inverted
          ? this.props.valueTo
          : this.state.valueBase}
        valueTo={this.props.inverted 
          ? this.state.valueBase 
          : this.props.valueTo}
        onChange={this.props.inverted 
          ? this.handleExchangeInverted.bind(this)
          : this.handleExchange.bind(this)}
        onReverse={this.handleInvert.bind(this)}
        openCurrencyList={this.props.openCurrencyList}
      />
    )
  }
}

export default connect(
  state => ({
    rates: state.currencies.rates,
    inverted: state.converter.inverted,
    currencyBase: state.converter.currencyBase,
    currencyTo: state.converter.currencyTo,
    valueBase: state.converter.valueBase,
    valueTo: state.converter.valueTo,
  }),
  dispatch => ({
    onHandleInvert: (state) => {
      dispatch(actions.invertConverter(state))
    },
  })
)(Exchanger)