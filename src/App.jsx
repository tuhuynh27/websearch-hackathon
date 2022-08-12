import './App.scss'

import { useState } from 'react'

import TopMenu from './components/top-menu/TopMenu.jsx'
import SearchBar from './components/search-bar/SearchBar.jsx'
import SearchResult from './components/search-result/SearchResult.jsx'
import TopPageAds from './components/top-page-ads/TopPageAds.jsx'

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

  const handleSearch = () => {
    setSearchResultMode(true)
    console.log('Searching ' + searchText)
  }

  return (
    <div className={searchResultMode ? 'app' : 'app default'}>
      <TopMenu searchTabs={searchTabs}
               activeTab={activeTab}
               onTabChange={tab => setActiveTab(tab)}
               onLogoClick={() => { setSearchResultMode(false); setSearchText('') }}/>
      <SearchBar searchText={searchText}
                 onChange={e => setSearchText(e.target.value)}
                 onSearch={handleSearch}/>
      {searchResultMode ? <SearchResult /> : <TopPageAds/>}
    </div>
  )
}

export default App
