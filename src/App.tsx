import './App.css'
import SnippetCard from './SnippetCard'
import AddSnippetForm from './AddSnippetForm'
import SearchBar from './SearchBar'
import { useState } from 'react'
import type {
  Language,
  Tag,
  Snippet,
  SnippetInput
} from './types.js'

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

  const [searchTerm, setSearchTerm] = useState('')

  const handleAddSnippet = (newSnippet: SnippetInput) => {
    const snippet: Snippet = {
      ...newSnippet,
      id: Date.now() // Simple ID generation
    }
    setSnippets([snippet, ...snippets])
  }

  const filteredSnippets = snippets.filter(snippet => {
    const searchLower = searchTerm.toLowerCase()
    const titleMatch = snippet.title.toLowerCase().includes(searchLower)
    const tagsMatch = snippet.tags.some(tag => 
      tag.toLowerCase().includes(searchLower)
    )
    return titleMatch || tagsMatch
  })

  return (
    <div>
      <h1>Code Snippet Gallery</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddSnippetForm onAdd={handleAddSnippet} />
      <div className="snippets-container">
        {filteredSnippets.length > 0 ? (
          filteredSnippets.map(snippet => (
            <SnippetCard key={snippet.id} {...snippet} />
          ))
        ) : (
          <p>No snippets found. Try a different search term.</p>
        )}
      </div>
    </div>
  )
}

export default App
