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

export function getSearchResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockSearchResultData)
    }, 2000)
  })
}
