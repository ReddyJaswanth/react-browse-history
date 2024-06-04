import './App.css'
import {Component} from 'react'
import BrowserHistoryItem from './components/BrowserHistoryItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteItem = uniqueNo => {
    const {historyList} = this.state
    const filteredResults = historyList.filter(item => item.id !== uniqueNo)
    this.setState({
      historyList: filteredResults,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const serachResults = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput),
    )
    return (
      <>
        <nav className="nav-bar">
          <div className="logo-wrapper">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="search-bar">
            <div className="search-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="serach-logo"
              />
            </div>
            <input
              type="search"
              placeholder="Search History.."
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </nav>
        <section className="background-main-section">
          {serachResults.length > 0 ? (
            <ul>
              {serachResults.map(eachItem => (
                <BrowserHistoryItem
                  key={eachItem.id}
                  timeAccessed={eachItem.timeAccessed}
                  logoUrl={eachItem.logoUrl}
                  title={eachItem.title}
                  domainUrl={eachItem.domainUrl}
                  deleteHistory={this.deleteItem}
                  uniqueNo={eachItem.id} testId="delete"
                />
              ))}
            </ul>
          ) : (
            <div className="no-history-text-cont">
              <p>Empty History View </p>
            </div>
          )}
        </section>
      </>
    )
  }
}

export default App
