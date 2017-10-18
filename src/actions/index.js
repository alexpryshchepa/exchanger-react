import * as types from 'constants/ActionTypes'
import GetRates from 'store/GetRates';

export const getDate = date => ({ type: types.GET_DATE, date: date })
export const clearRates = () => ({ type: types.CLEAR_RATES, rates: '' })
export const getRates = base => dispatch => GetRates(base, function (data, names) {
  dispatch({ type: types.FETCH_RATES_SUCCESS, rates: data.rates, names: names })
}, function () {
  console.log('error');
})
export const invertConverter = state => ({ type: types.INVERT_CONVERTER, inverted: state })
export const changeCurrencyBase = currency => ({ type: types.CHANGE_CURRENCY_BASE, currencyBase: currency })
export const changeCurrencyTo = (currency, value) => ({ type: types.CHANGE_CURRENCY_TO, currencyTo: currency, valueTo: value })
