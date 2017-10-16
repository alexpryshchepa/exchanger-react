const initialState = {
  date: 'Today'
}

export default function date (state = initialState, action) {
  switch(action.type) {
    case 'GET_DATE':
      return {
        ...state,
        date: action.date
      }
      break
    default:
      return state
  }
}