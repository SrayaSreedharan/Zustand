import React from 'react'
import useCounterStore from './store/counterStore'

function App() {
  const { count, increment, decrement, reset } = useCounterStore()

  const style = {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>Zustand Counter</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{count}</h2>
      <div>
        <button onClick={increment} style={{ ...style, background: '#4caf50', color: '#fff' }}>
          ➕ Increment
        </button>
        <button onClick={decrement} style={{ ...style, background: '#f44336', color: '#fff' }}>
          ➖ Decrement
        </button>
        <button onClick={reset} style={{ ...style, background: '#2196f3', color: '#fff' }}>
          🔄 Reset
        </button>
      </div>
    </div>
  )
}

export default App
