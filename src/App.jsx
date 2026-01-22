import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Code Snippet Gallery</h1>
      <p>A collection of useful code snippets</p>
      <p>Work in progress - Day 1</p>
    </div>
  )
}

export default App
