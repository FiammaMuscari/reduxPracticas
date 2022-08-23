
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy, reset } from './store/slices/counter/counterSlice'

function CounterApp() {

  const{value}= useSelector(state =>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>count is {value}</h2>
      <div className="card">
        <button onClick={() => {dispatch(decrement())}}>
          decrement
        </button>
        <button onClick={() => {dispatch(increment())}}>
          increment
        </button>
        <button onClick={() => {dispatch(incrementBy(5))}}>
          Increment by 5
        </button>  
        <button onClick={() => {dispatch(reset())}}>
          reset
        </button>  
      </div>
    </div>
  )
}

export default CounterApp
