import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import chatStore from './REDUX/chatStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Provider store={chatStore}>
    <App />


    </Provider> 
    </BrowserRouter>
  
)
