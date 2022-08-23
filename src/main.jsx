import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Provider} from 'react-redux'
import {store} from './store/store' 
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'
import CounterApp from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoApp/>
    <PokemonApp/>
    <CounterApp />
      
    </Provider>
  </React.StrictMode>
)
