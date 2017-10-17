const initialState = [
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

export default function presets (state = initialState, action) {
  return state
}