const initialState = {
  inverted: false,
  currencyBase: 'USD',
  currencyTo: 'RUB',
  valueBase: 1,
  valueTo: 57.17,
};

export default function converter (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_CURRENCY_BASE':
      return {
        ...state,
        currencyBase: action.currencyBase
      }
      break
    case 'CHANGE_CURRENCY_TO':
      return {
        ...state,
        currencyTo: action.currencyTo
      }
      break
    case 'INVERT_CONVERTER':
      return {
        ...state,
        inverted: action.inverted
      }
      break
    default:
      return state
  }
}