const initialState = {
  presets: [
    {
      currFrom: 'USD',
      currTo: 'UAH',
    },
    {
      currFrom: 'UAH',
      currTo: 'RUB',
    },
    {
      currFrom: 'GBP',
      currTo: 'USD',
    },
    {
      currFrom: 'EUR',
      currTo: 'UAH',
    },
  ]
}

export default function presets (state = initialState, action) {
  switch(action.type) {
    case 'GET_PRESETS':
      return state
      break
    default:
      return state
  }
}