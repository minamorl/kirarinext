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
    console.log( document.querySelector("#dropdown-menu").style.visibility)
    document.querySelector("#dropdown-menu").style.visibility=document.querySelector("#dropdown-menu").style.visibility == "hidden" ? "visible" : "hidden"
  }
  return <div className="icon-button" onClick={onclick}>
    <img src={client.user.avatar_url} alt="avatar url"/>
  </div>
}
const Header = (props) => {
  const signout = () => {
    client.signout().then(() => {
      window.location.reload()
    })
    return false
  }
  const settings = () => {
  }
  const item = client.logged_in ? <IconButton /> : <LoginButton/>
  let dropdown_visibility = false
  return <header>
    <div>
      <h1><a href="#">kirarich@next</a></h1>
      { item }
    </div>
    <Menu className="button-menu">
      <MenuButton label="ログアウト" href="#signout" onClick={signout}/>
      <MenuButton label="アカウント設定" href="#settings" onClick={settings}/>
    </Menu>
  </header>
}
const Page = (props) => {
  return <div>
    <Header />
    {props.children}
  </div>
}
const Menu = (props) => {
  const defaultStyle = {
    zIndex: 20,
    width: "160px",
    backgroundColor: "white",
    position: "absolute",
    top: "0",
    right: "0",
    margin: "0",
    padding: "0",
    visibility: "hidden"
  }
  return <div>
    <ul style={defaultStyle} id="dropdown-menu">
      {props.children}
    </ul>
  </div>
}
const MenuButton = (props) => {
  const defaultStyle = {
    // visible: props.visible ? "visible" : "hidden"
    margin: "2px",
    padding: "8px",
    fontSize: "18px",
    color: "#acacac",
    border: "1px solid #efefef",
    display: "block",
    color: "black"
  }
  return <li style={defaultStyle}><a href={props.href} onClick={props.onClick}>{props.label}</a></li>
}
export default Page
