import React from 'react'

import Kirari from "../services/Kirari"
let client = new Kirari()
const LoginButton = () => {
  return <div>
    <a href="#signin" id="login-button">Login</a>
  </div>
}
const IconButton = () => {
  const onclick = () => {
    client.signout().then(() => {
      window.location.reload()
    })
  }
  return <div className="icon-button" onClick={onclick}>
    <img src={client.user.avatar_url} alt="avatar url"/>
  </div>
}
const Header = (props) => {
  const item = client.logged_in ? <IconButton /> : <LoginButton/>
  return <header>
    <h1><a href="#">kirarich@next</a></h1>
    { item }
  </header>
}
const Page = (props) => {
  return <div>
    <Header />
    {props.children}
  </div>
}
export default Page
