import FeedbackContext from '../contexts/FeedbackContext'
import {useContext} from 'react'

function FeedBackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = Math.round(feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) /feedback.length)
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} reviews</h4>
            <h4>Average rating: {isNaN(average)? 0 : average}</h4>
            </div>
        )
}

export default FeedBackStats
