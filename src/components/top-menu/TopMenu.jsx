import styles from './TopMenu.module.scss'

function TopMenu({ searchTabs, activeTab, onTabChange, onLogoClick, isPending }) {
  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      onTabChange(tab)
    }
  }
  return (
    <div className={styles.topMenu}>
      <img src="https://image.infoseek.rakuten.co.jp/content/toolbar-platform/websearch/image/icon/logo__pc.svg" alt="Logo"
        onClick={() => onLogoClick()}/>
      <div className={styles.searchTabs}>
        {searchTabs.map(tab => (
          <div key={tab}
               onClick={() => handleTabChange(tab)}
               className={tab === activeTab ? isPending ? styles.activeLoading : styles.active : null}>{tab}</div>
        ))}
      </div>
    </div>
  )
}

export default TopMenu
