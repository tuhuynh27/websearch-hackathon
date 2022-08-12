import styles from './SearchResult.module.scss'

function SearchResult({ loading = false, results = [] }) {
  return (
    <div className={styles.searchResult}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {!loading && results.map(data => (
        <div className={styles.resultElement}>
          <h1>{data.title}</h1>
          <div>{data.url}</div>
          <div>{data.desc}</div>
        </div>))}
    </div>
  )
}

export default SearchResult
