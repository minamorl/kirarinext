import React from 'react'
const LoginButton = () => {
  return <div>
    <a href="#signin" id="login-button">Login</a>
  </div>
}
const Header = (props) => {
  return <header>
    <h1><a href="#">kirarich@next</a></h1>
    <LoginButton/>
  </header>
}
const Page = (props) => {
  return <div>
    <Header />
    {props.children}
  </div>
}
export default Page
