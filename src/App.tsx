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

  const [showAddForm, setShowAddForm] = useState(false)

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
      <div className="stats">
        <p>Total Snippets: {snippets.length}</p>
        {searchTerm && (
          <p>Showing: {filteredSnippets.length} of {snippets.length}</p>
        )}
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <button type='submit' onClick={() => setShowAddForm(!showAddForm)}>Add New Snippet</button>
      {showAddForm && <AddSnippetForm onAdd={handleAddSnippet} /> }
      <div className="snippets-container">
        {filteredSnippets.length > 0 ? (
          filteredSnippets.map(snippet => (
            <SnippetCard key={snippet.id} {...snippet} />
          ))
        ) : searchTerm ? (
          <div className="empty-state">
            <p>🔍 No snippets found for "{searchTerm}"</p>
            <p>Try a different search term or add a new snippet.</p>
          </div>
        ) : (
          <div className="empty-state">
            <p>📝 No snippets yet!</p>
            <p>Add your first code snippet above.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
