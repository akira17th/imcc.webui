import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { SnackbarProvider } from 'notistack'
import App from './App'

ReactDOM.render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
)
