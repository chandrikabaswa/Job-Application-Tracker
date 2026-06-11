import './SearchBar.css';

export function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <input className="search-input"
      type="text"
      placeholder="Search company or role..."
      value={searchTerm}
      onChange={(event) =>
        setSearchTerm(event.target.value)
      }
    />
  );
}