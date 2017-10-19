import * as types from 'constants/ActionTypes'
import GetRates from 'store/GetRates';

export const getDate = date => ({
  type: types.GET_DATE,
  date: date
})
export const clearRates = () => ({
  type: types.CLEAR_RATES,
  rates: ''
})
export const getRates = (currencyBase, currencyTo) => dispatch => GetRates(currencyBase, function (data, names) {
  dispatch({
    type: types.FETCH_RATES_SUCCESS,
    rates: data.rates,
    names: names,
    currencyBase: currencyBase,
    valueBase: 1,
  })
  if (currencyTo) {
    dispatch({
      type: types.CHANGE_CURRENCY_TO,
      currencyTo: currencyTo,
      valueTo: Math.round(data.rates[currencyTo] * 100) / 100,
    })
  }
}, function () {
  console.log('error');
})
export const invertConverter = state => ({
  type: types.INVERT_CONVERTER,
  inverted: state
})
export const changeCurrencyBase = currency => ({
  type: types.CHANGE_CURRENCY_BASE,
  currencyBase: currency
})
export const changeCurrencyTo = (currency, value) => ({
  type: types.CHANGE_CURRENCY_TO,
  currencyTo: currency,
  valueTo: Math.round(value * 100) / 100,
})
