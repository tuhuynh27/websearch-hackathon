import './App.scss'

import { useState, useEffect } from 'react'

import TopMenu from './components/top-menu/TopMenu.jsx'
import SearchBar from './components/search-bar/SearchBar.jsx'
import SearchResult from './components/search-result/SearchResult.jsx'
import TopPageAds from './components/top-page-ads/TopPageAds.jsx'

import { getSearchResult } from './api/getSearchResult'

const searchTabs = [
  'web',
  'shopping',
  'image',
  'movie',
  'map',
  'news',
  'trip',
  'others'
]

function App() {
  const [searchResultMode, setSearchResultMode] = useState(false)
  const [activeTab, setActiveTab] = useState(searchTabs[0])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if (searchResultMode && searchText) {
      document.title = 'Search results for ' + searchText
    } else {
      document.title = 'Rakuten Web Search'
    }
  }, [searchResultMode, searchText])

  const handleReset = () => {
    setSearchResultMode(false);
    setActiveTab(searchTabs[0]);
    setSearchText('');
  }

  const handleSearch = async () => {
    setSearchResultMode(true)
    setLoading(true)
    const data = await getSearchResult()
    setLoading(false)
    setSearchResult(data)
  }

  return (
    <div className={searchResultMode ? 'app' : 'app default'}>
      <TopMenu searchTabs={searchTabs}
               activeTab={activeTab}
               onTabChange={tab => setActiveTab(tab)}
               onLogoClick={() => handleReset()}/>
      <SearchBar searchText={searchText}
                 onChange={e => setSearchText(e.target.value)}
                 onSearch={handleSearch}/>
      {searchResultMode ? <SearchResult loading={loading} results={searchResult} /> : <TopPageAds/>}
    </div>
  )
}

export default App
