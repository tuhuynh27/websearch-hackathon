import styles from './TopMenu.module.scss'

function TopMenu({ searchTabs, activeTab, onTabChange, onLogoClick }) {
  return (
    <div className={styles.topMenu}>
      <img src="https://image.infoseek.rakuten.co.jp/content/toolbar-platform/websearch/image/icon/logo__pc.svg" alt="Logo"
        onClick={() => onLogoClick()}/>
      {searchTabs.map(tab => (
        <div key={tab}
             onClick={() => onTabChange(tab)}
             className={tab === activeTab ? styles.active : null}>{tab}</div>
      ))}
    </div>
  )
}

export default TopMenu