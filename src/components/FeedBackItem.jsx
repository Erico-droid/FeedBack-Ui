import Card from './shared/Card'
import FeedbackContext from '../contexts/FeedbackContext'
import {useContext} from 'react'


function FeedBackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
        <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <span>C</span>
                </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <span>E</span>
                </button>
            <div className="text-display">
                {item.text}
                </div>
            </Card>
        )
}

export default FeedBackItem
