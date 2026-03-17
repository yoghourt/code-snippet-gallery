// SnippetCard.jsx

interface SnippetCard {
  title: string
  code: string
  language: string
  tags: string[]
}

function SnippetCard({ title, code, language, tags }: SnippetCard) {
  return (
    <div className="snippet-card">
      <h3>{title}</h3>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <pre>
        <code>{code}</code>
      </pre>
      <p className="language">{language}</p>
    </div>
  )
}

export default SnippetCard