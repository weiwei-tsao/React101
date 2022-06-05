import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [quizForm, setQuizForm] = useState({
    amount: '5',
    category: 'politics',
    difficulty: 'hard'
  })

  const fetchQuestions = async (requestUrl) => {
    setLoading(true)
    setWaiting(false)

    const response = await axios(requestUrl).catch(err => console.log(err))
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setWaiting(false)
        setLoading(false)
        setError(false)
      }
      else {
        setError(true)
        setWaiting(true)
      }
    }
    else {
      setWaiting(true)
    }

  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal()
        return 0
      }
      else {
        return index
      }
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1)
    }

    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCorrect(0)
    setWaiting(true)
  }

  const handleChange = (event) => {
    // console.log(event.target.name)
    const name = event.target.name
    const value = event.target.value
    setQuizForm({ ...quizForm, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `https://opentdb.com/api.php?amount=${quizForm.amount}&category=${table[quizForm.category]}&difficulty=${quizForm.difficulty}&type=multiple`
    // console.log(url)
    fetchQuestions(url)
  }

  // useEffect(() => {
  //   fetchQuestions(tempUrl)
  // }, [])

  return <AppContext.Provider value={{
    loading,
    waiting,
    error,
    questions,
    index,
    correct,
    isModalOpen,
    nextQuestion,
    checkAnswer,
    closeModal,
    quizForm,
    handleChange,
    handleSubmit,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
