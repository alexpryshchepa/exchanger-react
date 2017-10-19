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
      currencyListMeaning: '',
    }
  }
  
  componentWillMount () {
    this.props.onSetDate();
  }
  
  componentDidMount () {
    this.props.onGetRates();
  }
  
  openCurrencyList (e) {
    this.setState({
      currencyListVisibility: !this.state.currencyListVisibility,
      currencyListMeaning: e.target.dataset.meaning,
    })
  }
  
  changeCurrency (e) {
    this.setState({
      currencyListVisibility: !this.state.currencyListVisibility
    })
     
    let value;
     
    for (let key in this.props.rates) {
      if (e.target.innerText === key) value = this.props.rates[key]
    }
    
    if (this.props.inverted) {
      this.props.onChangeCurrency(e.target.dataset.meaning, e.target.innerText, this.props.currencyTo, Math.round(value / this.props.valueBase * 100) / 100);
    } else {
      this.props.onChangeCurrency(e.target.dataset.meaning, e.target.innerText, this.props.currencyTo, Math.round(value * this.props.valueBase * 100) / 100);
    }
  }
  
  changePreset (e) {
    let currForm = e.target.dataset.currfrom;
    let currTo = e.target.dataset.currto;
    
    this.props.onChangePreset(currForm, currTo);
  }
  
  render () {
    return (
      this.props.rates ? (
        <Container 
          children={
            <div>
              <Header date={this.props.date} />
              <Exchanger openCurrencyList={this.openCurrencyList.bind(this)} />
              <Presets 
                presets={this.props.presets}
                changePreset={this.changePreset.bind(this)} />
            </div>
          } 
          currencies={this.props.names}
          currencyListVisibility={this.state.currencyListVisibility}
          currencyListMeaning={this.state.currencyListMeaning}
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
    names: state.converter.names,
    rates: state.converter.rates,
    valueBase: state.converter.valueBase,
    currencyTo: state.converter.currencyTo,
    inverted: state.converter.inverted,
  }),
  dispatch => ({
    onSetDate: () => {
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      
      let date = new Date();
      
      dispatch(actions.getDate(months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()))
    },
    onGetRates: value => {
      dispatch(actions.getRates('USD', 'RUB'));
    },
    onChangeCurrency: (meaning, currency, currencyTo, value) => {
      if (meaning === 'currencyBase') {
        dispatch(actions.clearRates());
        dispatch(actions.invertConverter(false));
        dispatch(actions.changeCurrencyBase(currency));
        dispatch(actions.getRates(currency, currencyTo));
      } else if (meaning === 'currencyTo') {
        dispatch(actions.changeCurrencyTo(currency, value))
      }
    },
    onChangePreset: (currForm, currTo) => {
      dispatch(actions.clearRates());
      dispatch(actions.invertConverter(false));
      dispatch(actions.getRates(currForm, currTo))
    }
  })
)(App);