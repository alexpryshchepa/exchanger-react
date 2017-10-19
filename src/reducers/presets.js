const initialState = [
  {
    currFrom: 'EUR',
    currTo: 'USD',
  },
  {
    currFrom: 'GBP',
    currTo: 'USD',
  },
  {
    currFrom: 'EUR',
    currTo: 'RUB',
  },
  {
    currFrom: 'RUB',
    currTo: 'GBP',
  },
]

export default function presets (state = initialState, action) {
  return state
}