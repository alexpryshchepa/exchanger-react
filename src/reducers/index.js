import { combineReducers } from 'redux';

import date from './date';
import presets from './presets';
import currencies from './currencies';

export default combineReducers({
  date,
  presets,
  currencies,
})