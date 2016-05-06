import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Page from './views/Page'
import Thread from './views/Thread'
import Signin from './views/Signin'


/* apply stylesheets  */
import 'normalize.css/normalize.css'
import '../css/style.sass'

/* initialize react application */
const DEFAULT_THREAD = "$DEFAULT"
const init = () => {
  routing()
}
const rerender = (obj) => {
  const app = document.getElementById("Application")
  ReactDOM.render(<Page>{obj}</Page>, app)
}
const routing = () => {
  const current = location.hash
  if (current === "#signin") rerender(<Signin />)
  else
    rerender(<Thread name={DEFAULT_THREAD}/>)
}

/* Set event listner for initialization */
document.addEventListener('DOMContentLoaded', init, false);
window.addEventListener("hashchange", routing, false);
