import React, {Component} from "react"

import Kirari from "../services/Kirari"

const Signin = () => { return (
  <div>
    <form id="signin-form">
      <div>
        <label>Username</label>
        <input id="form-username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input id="form-password" type="password" />
      </div>
      <input type="button" value="ログイン"/>
    </form>
  </div>
)}
export default Signin
