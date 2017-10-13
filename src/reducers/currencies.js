const initialState = {
  rates: false
}

export default function currencies (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_RATES_SUCCESS':
      return {
        ...state,
        rates: action.rates
      }
      break
    default:
      return state
  }
}