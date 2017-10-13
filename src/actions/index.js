import * as types from 'constants/ActionTypes'
import GetRates from 'store/GetRates';

export const getRates = rates => dispatch => GetRates(function (data) {
  dispatch({ type: types.FETCH_RATES_SUCCESS, rates: data.rates })
})
