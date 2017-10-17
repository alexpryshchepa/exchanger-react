const initialState = {
  inverted: false,
  currencyBase: 'USD',
  currencyTo: 'RUB',
  valueBase: 1,
  valueTo: 57.17,
};

export default function converter (state = initialState, action) {
  switch(action.type) {
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