import './App.scss'

import { useState, useEffect, useTransition } from 'react'

import TopMenu from './components/top-menu/TopMenu.jsx'
import SearchBar from './components/search-bar/SearchBar.jsx'
import SearchResult from './components/search-result/SearchResult.jsx'
import TopPageAds from './components/top-page-ads/TopPageAds.jsx'

import {fetchSearchResult, getSearchResult} from './api/getSearchResult'

const searchTabs = [
  'web',
  'shopping',
  'image',
  'video',
  'map',
  'travel'
]

function App() {
  const [searchResultMode, setSearchResultMode] = useState(false)
  const [activeTab, setActiveTab] = useState(searchTabs[0])
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState(getSearchResult('', 'web'))
  const [isPending, startTransition] = useTransition()
  const [nextResults, setNextResults] = useState([])

  useEffect(() => {
    if (searchResultMode && searchText) {
      document.title = 'Search results for ' + searchText
    } else {
      document.title = 'Rakuten Web Search'
    }
  }, [searchResultMode, searchText])

  useEffect(() => {
    if (searchResultMode) {
      setNextResults([])
      void handleSearch()
    }
  }, [activeTab])

  const handleReset = () => {
    setSearchResultMode(false)
    setSearchText('')
    setActiveTab(searchTabs[0])
  }

  const handleSearch = async () => {
    startTransition(() => {
      setNextResults([])
      setSearchResultMode(true)
      setSearchResult(getSearchResult(searchText, activeTab))
    })
  }

  const loadNext = async (currLength) => {
    if (nextResults.length > currLength) {
      startTransition(() => {
        setSearchResult(getSearchResult(searchText, activeTab, 0, nextResults))
      })
      return
    }
    startTransition(() => {
      setSearchResult(getSearchResult(searchText, activeTab, currLength))
    })
  }

  const prepareNext = async (currLength) => {
    console.log('prepareNext for ' + currLength)
    const next = await fetchSearchResult(searchText, activeTab, currLength)
    setNextResults(next)
    console.log('Done prepareNext for ' + currLength)
  }

  useEffect(() => {
    if (searchResultMode) {
      void prepareNext(nextResults.length === 0 ? 20 : nextResults.length + 10)
    }
  }, [searchResult])

  return (
    <div className={searchResultMode ? 'app' : 'app default'}>
      <TopMenu searchTabs={searchTabs}
               activeTab={activeTab}
               onTabChange={tab => setActiveTab(tab)}
               onLogoClick={() => handleReset()} isPending={isPending}/>
      <SearchBar searchText={searchText}
                 onChange={e => setSearchText(e.target.value)}
                 onSearch={handleSearch}/>
      {searchResultMode ? <SearchResult searchResult={searchResult}
                                        loadNext={loadNext}
                                        isPending={isPending}/> : <TopPageAds/>}
    </div>
  )
}

export default App
