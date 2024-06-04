import './index.css'

const BrowserHistory = props => {
  const {title, timeAccessed, logoUrl, domainUrl, uniqueNo, deleteHistory, testid} =
    props

  const deleteItem = () => deleteHistory(uniqueNo)

  return (
    <li>
      <div className="time-wrapper">
        <p>{timeAccessed}</p>
      </div>
      <div className="wrapper">
        <div className="logo-title-domain-wrapper">
          <img src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <div>
          <button
            type="submit"
            className="delete-button"
            onClick={deleteItem}
            testid={testid}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistory
