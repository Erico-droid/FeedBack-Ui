import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {}
  })

  useEffect(() => {
    fetchFeedback();
  }, [])

  //get feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
  //delete the feedback item
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`, {method: 'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()

    setFeedback([data, ...feedback])
  }
  //update the feedback item
  const updateFeedback = async (id, upditem) => {
    const response = await fetch(`/feedback/${id}`, {
      method:'PUT',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(upditem)
    })
    const data = await response.json()
    setFeedback( feedback.map((item) => (item.id === id ? {...item, ...data} : item)))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
      item
    })
  }

  return (<FeedbackContext.Provider value = {{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
    isLoading,
  }}>
  {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext
