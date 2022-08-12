import styles from './SearchResult.module.scss'

const mockSearchResultData = [
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
  {
    title: 'Adele - Hello - YouTube',
    url: 'www.youtube.com/watch?v=YQHsXMglC9A',
    desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
  },
]

function SearchResult() {
  return (
    <div className={styles.searchResult}>
      <div className={styles.resultElement}>
        <h1>Adele - Hello - YouTube</h1>
        <div>www.youtube.com/watch?v=YQHsXMglC9A</div>
        <div>2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele's new album "30" before its release on November 19: https://www.adele.</div>
      </div>
      {mockSearchResultData.map(data => (
        <div className={styles.resultElement}>
          <h1>{data.title}</h1>
          <div>{data.url}</div>
          <div>{data.desc}</div>
        </div>))}
    </div>
  )
}

export default SearchResult
