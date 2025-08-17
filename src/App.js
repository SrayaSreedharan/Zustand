import React from 'react'
import useCounterStore from './store/counterStore'

function App() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>ZUSTAND COUNTER</h1>
      <h2>{count}</h2>
      {/* <button onClick={increment}>Increment</button> */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
