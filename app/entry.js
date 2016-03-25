import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Thread from './views/Thread'

/* initialize react application */
const DEFAULT_THREAD = "$DEFAULT"
const init = () => {
  const app = document.getElementById("Application")
  ReactDOM.render(<Thread name={DEFAULT_THREAD}/>, app)
}

/* Set event listner for initialization */
document.addEventListener('DOMContentLoaded', init, false);
