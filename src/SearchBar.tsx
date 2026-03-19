
interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function SearchBar({searchTerm, onSearchChange}: SearchBarProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search snippets by title or tags..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      {searchTerm && (
        <button 
          onClick={() => onSearchChange('')}
          className="clear-button"
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar