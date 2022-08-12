import styles from './SearchBar.module.scss'

function SearchBar({ loading, searchText, onChange, onSearch }) {
  const handleSubmit = e => {
    e.preventDefault()
    onSearch()
  }
  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input type="search" placeholder="Search" value={searchText} onChange={onChange}/>
      <button type="submit" disabled={loading}>Search</button>
    </form>
  )
}

export default SearchBar
