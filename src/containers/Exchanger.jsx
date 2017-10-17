import React, { Component } from 'react';
import { connect } from 'react-redux';

import Converter from 'components/Converter';
import Input from 'components/Input';

import * as actions from 'actions';

class Exchanger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inverted: false,
      currencyBase: 'USD',
      currency: 'RUB',
      valueBase: 1,
      value: Math.round(this.props.rates.RUB * 100) / 100,
    }
  }

  handleExchange (e) {
    this.setState({
      valueBase: e.target.value,
      value: Math.round((e.target.value * this.props.rates.RUB) * 100) / 100,
    })
  }
  
  handleExchangeInverted (e) {
    this.setState({
      valueBase: Math.round((e.target.value / this.props.rates.RUB) * 100) / 100,
      value: e.target.value,
    })
  }
  
  handleInvert () {
    this.setState({
      inverted: !this.state.inverted
    })
  }
  
  render() {
    return (
      <Converter 
        currencyBase={this.state.inverted 
          ? this.state.currency 
          : this.state.currencyBase}
        currency={this.state.inverted
          ? this.state.currencyBase
          : this.state.currency}
        valueBase={this.state.inverted
          ? this.state.value
          : this.state.valueBase}
        value={this.state.inverted 
          ? this.state.valueBase 
          : this.state.value}
        onChange={this.state.inverted 
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
  })
)(Exchanger)