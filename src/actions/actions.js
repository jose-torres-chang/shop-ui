export const LOGIN = 'LOGIN'
export const ERROR = 'ERROR'

export const actions = {
  login: (user) => ({ type: LOGIN, payload: user}),
  logError: (err) => {
    console.log(err)
    return ({type: ERROR, payload: err})
  }
}