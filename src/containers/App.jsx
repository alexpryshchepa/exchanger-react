import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Container from 'components/Container';
import Header from 'components/Header';
import Exchanger from 'containers/Exchanger';
import Presets from 'components/Presets';
import Loader from 'components/Loader';

import * as actions from 'actions';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currencyListVisibility: false,
    }
    this.openCurrencyList = this.openCurrencyList.bind(this)
  }
  
  componentWillMount () {
    this.props.onSetDate();
    this.props.onSetPresets();
  }
  
  componentDidMount () {
    this.props.onGetRates();
  }
  
  openCurrencyList () {
    this.setState({
      currencyListVisibility: !this.state.currencyListVisibility
    })
  }
  
  render () {
    return (
      this.props.rates ? (
        <Container 
          children={
            <div>
              <Header date={this.props.date} />
              <Exchanger selectCurrency={this.openCurrencyList} />
              <Presets presets={this.props.presets} />
            </div>
          } 
          currencies={this.props.currencies}
          currencyListVisibility={this.state.currencyListVisibility} />
      ) : (
        <Loader />
      )
    )
  }
}

export default connect(
  state => ({
    date: state.date.date,
    presets: state.presets.presets,
    currencies: ['USD', 'RUB', 'UAH', 'GBP'],
    rates: state.currencies.rates,
  }),
  dispatch => ({
    onSetDate: function () {
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      
      let date = new Date();
      
      dispatch(actions.getDate(months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()))
    },
    onSetPresets: function () {
      dispatch(actions.getPresets());
    },
    onGetRates: () => {
      dispatch(actions.getRates());
    }
  })
)(App);