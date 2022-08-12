import styles from './SearchResult.module.scss'

function SearchResult({ searchResult }) {
  const results = searchResult.results.read()
  return (
    <div className={styles.searchResult}>
      {results.map((data, index) => (
        <div className={styles.resultElement} key={index}>
          {data.image && <div>
            <img src={data.image} alt="Video"/>
          </div>}
          <div>
            <h1>{data.title}</h1>
            <div>{data.url}</div>
            <div>{data.desc}</div>
          </div>
        </div>))}
      {results.length === 0 && <div className={styles.loading}>No result</div>}
      {results.length > 0 && <div className={styles.pagination}>
        <div className={styles.paginationItem}>Prev</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page => (
          <div className={styles.paginationItem} key={page}>{page}</div>
        ))}
        <div className={styles.paginationItem}>Next</div>
      </div>}
    </div>
  )
}

export default SearchResult
