import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from '../actions/auth'

export default function auth (state = {
  isFetching: false,
  isLoggedIn: false,
  isFailed: false,
  jwt: '',
  username: ''
}, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false,
        isLoggedIn: false,
        jwt: '',
        username: ''
      })
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.data.Token)
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        isFailed: false,
        jwt: action.data.Token,
        username: action.data.Username
      })
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFailed: true
      })
    default:
      return state
  }
}