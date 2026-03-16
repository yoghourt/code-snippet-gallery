// SnippetCard.jsx
function SnippetCard({ title, code, language, tags }) {
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