// AddSnippetForm.tsx
import { useState } from 'react'

interface AddSnippetFormProps {
  onAdd: (snippet: {
    title: string
    code: string
    language: string
    tags: string[]
  }) => void
}

function AddSnippetForm({ onAdd }: AddSnippetFormProps) {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('JavaScript')
  const [tags, setTags] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    onAdd({
      title,
      code,
      language,
      tags: tags.split(',').map(tag => tag.trim())
    })

    // Clear form
    setTitle('')
    setCode('')
    setTags('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-snippet-form">
      <h2>Add New Snippet</h2>
      
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>CSS</option>
        <option>HTML</option>
      </select>

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit">Add Snippet</button>
    </form>
  )
}

export default AddSnippetForm