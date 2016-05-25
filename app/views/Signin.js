import React, {Component} from "react"

import Kirari from "../services/Kirari"

const post = (e) => {
    let client = new Kirari()
    const username = document.getElementById("form-username").value
    const password = document.getElementById("form-password").value
    client.signin(username, password).then((res) => {
      if (res.results.message) {
        document.getElementById("signin-message").innerHTML = res.results.message
        return false
      }
      location.hash = "#"
    })
    e.preventDefault()
}
const Signin = () => { return (
  <div>
    <form id="signin-form" onSubmit={post}>
      <div>
        <label>Username</label>
        <input id="form-username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input id="form-password" type="password" />
      </div>
      <input type="submit" value="ログイン"/>
    </form>
    <div id="signin-message"></div>
  </div>
)}
export default Signin
