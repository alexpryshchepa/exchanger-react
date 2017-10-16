import * as types from 'constants/ActionTypes'
import GetRates from 'store/GetRates';

export const getDate = date => ({ type: types.GET_DATE, date: date })
export const getPresets = presets => ({ type: types.GET_PRESETS, presets: presets })
export const getRates = rates => dispatch => GetRates(function (data) {
  dispatch({ type: types.FETCH_RATES_SUCCESS, rates: data.rates })
})
