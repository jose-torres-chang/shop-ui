const actionType = require('../actions/actions')

const initialState = {
  user:{
    email: '',
    firstName: 'Guest'
  },
  error: ''
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.LOGIN: 
      return ({state, user: payload})
    case actionType.ERROR:
      return ({state, error: payload})
    default: return state
  }
}