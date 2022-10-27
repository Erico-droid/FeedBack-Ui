import Header from './components/Header'
import FeedBackStats from './components/FeedBackStats'
import FeedBackItem from './components/FeedBackItem'
import Card from './components/shared/Card'
import FeedBackList from './components/FeedBackList'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutPageIconLink from './components/AboutPageIconLink'
import {FeedbackProvider} from './contexts/FeedbackContext'

function App() {
    return (
      <FeedbackProvider>
      <Router>
            <Header />
            <div className = "container">
            <Routes>
            <Route exact path = "/" element = {
                <>
                <FeedbackForm/>
                <FeedBackStats/>
                <FeedBackList/>
                <AboutPageIconLink/>
                </>
              }>

              </Route>
              <Route path= "/about" element = {<AboutPage/>}></Route>
              </Routes>
                </div>
        </Router>
        </FeedbackProvider>
        )
}

export default App
