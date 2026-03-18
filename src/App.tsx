import './App.css'
import SnippetCard from './SnippetCard'
import AddSnippetForm from './AddSnippetForm'
import { useState } from 'react'

interface Snippet {
  id: number
  title: string
  code: string
  language: string
  tags: string[]
}

function App() {

  const [snippets, setSnippets] = useState<Snippet[]>([
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
  ])

  const handleAddSnippet = (newSnippet: Omit<Snippet, 'id'>) => {
    const snippet: Snippet = {
      ...newSnippet,
      id: Date.now() // Simple ID generation
    }
    setSnippets([snippet, ...snippets])
  }

  return (
    <div>
      <h1>Code Snippet Gallery</h1>
      <AddSnippetForm onAdd={handleAddSnippet} />
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
