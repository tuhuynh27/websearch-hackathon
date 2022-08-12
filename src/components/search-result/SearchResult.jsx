import styles from './SearchResult.module.scss'

import { useCallback, useEffect } from 'react'

function SearchResult({ searchResult, loadNext, isPending, prepareNext }) {
  const results = searchResult.results.read()
  const onScroll = useCallback(async () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

    if (scrolledToBottom) {
      loadNext(results.length)
    }
  }, [results])
  useEffect(() => {
    window.addEventListener('scroll', onScroll, false)
    return () => {
      window.removeEventListener("scroll", onScroll, false)
    }
  }, [onScroll])
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
      {results.length > 0 && isPending && <div className={styles.loading}>Loading...</div>}
    </div>
  )
}

export default SearchResult
