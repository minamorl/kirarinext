import Cookies from "js-cookie"

export default class User {
  constructor() {
    this[Symbol.for("isLoggedIn")] = false
  }
  login({username, password}) {
    if(typeof username !== "string")
      throw TypeError("username must be given by string.")
    if(typeof password !== "string")
      throw TypeError("password must be given by string.")

    // create a *dummy* promise object. 
    // this must be replaced by *real* API calling.
    return new Promise((resolve, reject) => {
      if(true) resolve()
      reject()
    }).then(() => {
      // set cookies.
      Cookies.set("auth", "authed")
      Cookies.set("username", username)
      // set status
      this[Symbol.for("isLoggedIn")] = true
    }).catch(() => {
      // do nothing. just prevend from error.
    })
  }
  logout() {
    this[Symbol.for("isLoggedIn")] = false
    // destroy cookies.
    Cookies.remove("auth")
  }
  get isLoggedIn() {
    return this[Symbol.for("isLoggedIn")]
  }
  get username() {
    if (this.isLoggedIn)
      return Cookies.get("username")
    else
      throw Error("User is not logged in.")
  }
}
