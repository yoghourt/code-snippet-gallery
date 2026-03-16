import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SnippetCard from './SnippetCard'

function App() {

  const snippets = [
    {
      id: 1,
      title: "useState Hook",
      code: "const [count, setCount] = useState(0)",
      language: "JavaScript",
      tags: ["React", "Hooks"]
    },
    {
      id: 2,
      title: "Flexbox Center",
      code: "display: flex;\njustify-content: center;\nalign-items: center;",
      language: "CSS",
      tags: ["CSS", "Layout"]
    }
  ]

  return (
    <div>
      <h1>Code Snippet Gallery</h1>
      <div className='snippets-container'>
        {
          snippets.map(snippet => (
            <SnippetCard key={snippet.id} {...snippet} />
          ))
        }
      </div>
    </div>
  )
}

export default App
