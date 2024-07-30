import './index.css'

const TabItem = ({obj, onClickTabItem, isActive}) => {
  const {tabId, displayText} = obj
  const activeStyle = isActive ? 'active-tab-style' : ''
  return (
    <li
      className={`tab-item-container ${activeStyle}`}
      onClick={() => onClickTabItem(tabId)}
    >
      <button type="button">
        <p className="tab-item">{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
