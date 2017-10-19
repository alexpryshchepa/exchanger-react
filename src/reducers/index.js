import { combineReducers } from 'redux';

import date from './date';
import presets from './presets';
import converter from './converter';

export default combineReducers({
  date,
  presets,
  converter,
})