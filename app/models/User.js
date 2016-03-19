export default class User {
  constructor() {
    this._isLoggedIn = false
  }
  login({username, password}) {
    if(typeof username !== "string")
      throw TypeError("username must be given by string.")
    if(typeof password !== "string")
      throw TypeError("password must be given by string.")

    // create a *dummy* promise object. 
    // this must be replaced by *real* API calling.
    return new Promise((resolve, reject) => {
      if(result) resolve()
      reject()
    }).then(() => {
      // create cookies.
    }).catch(() => {
      // do nothing. just prevend from error.
    })
  }
  logout() {
    this._isLoggedIn = false
    // destroy cookies.
  }
  get isLoggedIn() {
    return this._isLoggedIn
  }
}
