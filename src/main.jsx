import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import './styles.css'
import './output.css'
import App from './App'
import store from './services/store'
import { GlobalContext } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <GlobalContext>
      <App />
    </GlobalContext>
  </Provider>
)
