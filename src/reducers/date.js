const initialState = 'Today';

export default function date (state = initialState, action) {
  switch(action.type) {
    case 'GET_DATE':
      return action.date
      break
    default:
      return state
  }
}