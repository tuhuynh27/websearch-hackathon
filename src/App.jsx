import './App.scss'

import { useState, useEffect, useTransition } from 'react'

import TopMenu from './components/top-menu/TopMenu.jsx'
import SearchBar from './components/search-bar/SearchBar.jsx'
import SearchResult from './components/search-result/SearchResult.jsx'
import TopPageAds from './components/top-page-ads/TopPageAds.jsx'

import { getSearchResult } from './api/getSearchResult'

const searchTabs = [
  'web',
  'shopping',
  'image',
  'video',
  'map',
  'news',
  'travel'
]

function App() {
  const [searchResultMode, setSearchResultMode] = useState(false)
  const [activeTab, setActiveTab] = useState(searchTabs[0])
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState(getSearchResult('', 'web'))
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (searchResultMode && searchText) {
      document.title = 'Search results for ' + searchText
    } else {
      document.title = 'Rakuten Web Search'
    }
  }, [searchResultMode, searchText])

  useEffect(() => {
    if (searchResultMode) {
      void handleSearch()
    }
  }, [activeTab])

  const handleReset = () => {
    location.reload()
  }

  const handleSearch = async () => {
    startTransition(() => {
      setSearchResultMode(true)
      setSearchResult(getSearchResult(searchText, activeTab))
    })
  }

  const loadNext = async (currLength) => {
    startTransition(() => {
      setSearchResult(getSearchResult(searchText, activeTab, currLength))
    })
  }

  return (
    <div className={searchResultMode ? 'app' : 'app default'}>
      <TopMenu searchTabs={searchTabs}
               activeTab={activeTab}
               onTabChange={tab => setActiveTab(tab)}
               onLogoClick={() => handleReset()} isPending={isPending}/>
      <SearchBar searchText={searchText}
                 onChange={e => setSearchText(e.target.value)}
                 onSearch={handleSearch}/>
      {searchResultMode ? <SearchResult searchResult={searchResult} loadNext={loadNext} /> : <TopPageAds/>}
    </div>
  )
}

export default App
