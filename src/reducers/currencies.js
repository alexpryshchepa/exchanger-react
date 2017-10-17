const initialState = {
  rates: '',
  names: [],
};

export default function currencies (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_RATES_SUCCESS':
      return {
        ...state,
        rates: action.rates,
        names: action.names,
      }
      break
    default:
      return state
  }
}