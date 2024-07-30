import './index.css'

const imagesList = ({obj, onClickThumbnail}) => {
  const {thumbnailUrl, id} = obj
  return (
    <li className="thumbnail-container" onClick={() => onClickThumbnail(id)}>
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default imagesList
