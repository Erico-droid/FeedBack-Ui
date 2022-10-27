import FeedBackItem from './FeedBackItem'
import FeedbackContext from '../contexts/FeedbackContext'
import {useContext} from 'react'
import Spinner from './shared/Spinner.jsx'

function FeedBackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    if (!isLoading && (feedback.length === 0 || !feedback )) return <p> No feedback at the moment </p>
    return isLoading ? <Spinner /> : (
      <div className="feedback-list">
        {feedback.map((item) => (
            <FeedBackItem key={item.id} item={item}/>
            ))}
        </div>
        )
}

export default FeedBackList
