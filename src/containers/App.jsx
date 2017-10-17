import React, { Component } from 'react';
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
  }
  
  componentWillMount () {
    this.props.onSetDate();
  }
  
  componentDidMount () {
    this.props.onGetRates();
  }
  
  openCurrencyList () {
    this.setState({
      currencyListVisibility: !this.state.currencyListVisibility
    })
  }
  
  changeCurrency (e) {
    this.setState({
      currencyListVisibility: !this.state.currencyListVisibility
    })
    
    this.props.onChangeCurrency(e.target.innerText);
  }
  
  render () {
    return (
      this.props.rates ? (
        <Container 
          children={
            <div>
              <Header date={this.props.date} />
              <Exchanger openCurrencyList={this.openCurrencyList.bind(this)} />
              <Presets presets={this.props.presets} />
            </div>
          } 
          currencies={this.props.names}
          currencyListVisibility={this.state.currencyListVisibility}
          changeCurrency={this.changeCurrency.bind(this)} />
      ) : (
        <Loader />
      )
    )
  }
}

export default connect(
  state => ({
    date: state.date,
    presets: state.presets,
    names: state.currencies.names,
    rates: state.currencies.rates,
  }),
  dispatch => ({
    onSetDate: () => {
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      
      let date = new Date();
      
      dispatch(actions.getDate(months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()))
    },
    onGetRates: () => {
      dispatch(actions.getRates());
    },
    onChangeCurrency: (currency) => {
      if (false) {
        dispatch(actions.changeCurrencyBase(currency))
      } else {
        dispatch(actions.changeCurrencyTo(currency))
      }
    }
  })
)(App);