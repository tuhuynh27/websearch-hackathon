const mockObj = {
  title: 'Adele - Hello - YouTube',
  url: 'www.youtube.com/watch?v=YQHsXMglC9A',
  image: 'https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg',
  desc: '2015/10/22 ... Listen to "Easy On Me" here: https://Adele.lnk.to/EOMPre-order Adele\'s new album "30" before its release on November 19: https://www.adele.',
}

function wrapPromise(promise) {
  let status = "pending"
  let result
  let suspender = promise.then(
    r => {
      status = "success"
      result = r
    },
    e => {
      status = "error"
      result = e
    }
  )
  return {
    read() {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else if (status === "success") {
        return result
      }
    }
  }
}

export function fetchSearchResult(searchText = '', searchTab = 'web', currLength = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const unsupported = ['image', 'shopping', 'map', 'news']
      if (unsupported.includes(searchTab) || !searchText.length) {
        resolve([])
        return
      }

      const r = (Math.random() + 1).toString(36).substring(7);
      const mockSearchResultData = Array(10 + currLength).fill(mockObj)
        .map((e, idx) => ({ ...e, title: `(${idx}) - ${searchText} - ${searchTab} - ${e.title}` }))

      if (searchTab !== 'video') {
        const noImage = ({ image, ...rest }) => rest
        const resultWithoutImage = mockSearchResultData.map(e => noImage(e))
        resolve(resultWithoutImage)
      } else {
        resolve(mockSearchResultData)
      }
    }, 1000)
  })
}

export function getSearchResult(searchText = '', searchTab = 'web', currLength = 0, preloaded = null) {
  if (preloaded) {
    return {
      results: wrapPromise(Promise.resolve(preloaded))
    }
  }
  const resultPromise = fetchSearchResult(searchText, searchTab, currLength)
  return {
    results: wrapPromise(resultPromise)
  }
}
