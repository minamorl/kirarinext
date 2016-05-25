import 'whatwg-fetch'
import qs from 'qs'
import Cookies from 'js-cookie'


const get = (endpoint, json) => {
  return fetch(endpoint + "?" + qs.stringify(json), {
    credentials: 'same-origin',
  }).then((response) => {
    return response.json()
  })
}
const post = (endpoint, json) => {
  return fetch(endpoint, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then((response) => {
      return response.json()
    })
}
let instance = null
export default class Kirari {
  constructor () {
    if(!instance) instance = this
    this.logged_in = false
    this.user = null
    if(Cookies.get('user') !== undefined) {
      try {
        this.user = JSON.parse(Cookies.get('user'))
        this.logged_in = true
      } catch (e) {
        this.user = null
        this.logged_in = false
        Cookies.remove('user')
      } }
    return instance
  }
  fetchThread(threadName, from=null) {
    if(from !== null) {
      return get("/api/comments", {q: threadName, from: from})
        .then((res) => {
          if (!res.results.auth) this.remove_user_cookies()
          return res
        })
    }
    return get("/api/comments", {q: threadName})
      .then((res) => {
        if (!res.results.auth) this.remove_user_cookies()
        return res
      })
  }
  comment(body) {
    return post("/api/comments", {body: body})
  }
  signin(username, password) {
    return post("/api/users", {username: username, password: password})
      .then((res) => {
        if(res.results.message !== undefined) {
          return res
        }
        this.user = res.results.user
        Cookies.set("user", JSON.stringify(this.user), { expires: 7 })
        this.logged_in = true
        return res
      })
  }
  remove_user_cookies() {
    this.logged_in = false
    delete this.user
    Cookies.remove('user')
  }
  signout() {
    this.remove_user_cookies()
    return get("/api/signout")
  }
  update_icon() {
    return post("/api/account_settings", { update_icon: true } ).then((res) => {
        this.user = res.results.user
        Cookies.set("user", JSON.stringify(this.user), { expires: 7 })
    })
  }
}
