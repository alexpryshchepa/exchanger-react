import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import Converter from 'components/Converter';
import Input from 'components/Input';

import * as actions from 'actions';

class Exchanger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currencyBase: 'USD',
      currency: 'RUB',
      valueBase: 1,
      value: this.props.rates.RUB,
    }
    this.handleExchange = this.handleExchange.bind(this);
  }

  handleExchange (e) {
    this.setState({
      valueBase: e.target.value,
      value: Math.round((e.target.value * this.props.rates.RUB) * 100) / 100,
    })
  }
  
  render() {
    return (
      <Converter 
        currencyBase={this.state.currencyBase}
        currency={this.state.currency}
        valueBase={this.state.valueBase}
        value={this.state.value}
        onChange={this.handleExchange}
        selectCurrency={this.props.selectCurrency}
      />
    )
  }
}

export default connect(
  state => ({
    rates: state.currencies.rates
  })
)(Exchanger)