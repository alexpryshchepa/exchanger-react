import * as types from 'constants/ActionTypes'
import GetRates from 'store/GetRates';

export const getDate = date => ({ type: types.GET_DATE, date: date })
export const getRates = () => dispatch => GetRates(function (data, names) {
  dispatch({ type: types.FETCH_RATES_SUCCESS, rates: data.rates, names: names })
}, function () {
  console.log('error');
})
export const invertConverter = state => ({ type: types.INVERT_CONVERTER, inverted: state })