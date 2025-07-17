import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JackpotWheel from './components/JackpotWheel'

function App() {
  const [count, setCount] = useState(0)
  const [lastWin, setLastWin] = useState<number | null>(null)

  const handleSpinComplete = (winningSegment: number) => {
    setLastWin(winningSegment)
    console.log(`Won segment: ${winningSegment}`)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <h2>Jackpot Wheel Demo</h2>
        <JackpotWheel
          wheelImage={reactLogo}
          segments={8}
          onSpinComplete={handleSpinComplete}
          size={300}
          duration={4000}
        />
        {lastWin !== null && (
          <p>Last winning segment: {lastWin}</p>
        )}
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
