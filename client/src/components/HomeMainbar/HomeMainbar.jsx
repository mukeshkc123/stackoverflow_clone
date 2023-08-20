import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import './HomeMainbar.css'

import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const questionsList = useSelector( state => state.questionsReducer)

  // let questionsList = [
  //   {
  //     id:1,
  //     votes:3,
  //     noOfAnswer:2,
  //     questionTitle: "what is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongoose"],
  //     userPosted:"mano",
  //     askedOn: "jan 1"
  //   },
  //   {
  //     id:2,
  //     votes:0,
  //     noOfAnswer:0,
  //     questionTitle: "what is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javaScript", "R", "python"],
  //     userPosted:"mano",
  //     askedOn: "jan 1"
  //   },
  //   {
  //     id:3,
  //     votes:1,
  //     noOfAnswer:0,
  //     questionTitle: "what is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javaScript", "R", "python"],
  //     userPosted:"mano",
  //     askedOn: "jan 1"
  //   }
  // ]

  const location = useLocation();

  const user = 1

  const navigate = useNavigate();

  const checkAuth = () =>{
      if(user === null)
      {
        alert("login or signup to ask a question")
        navigate('/Auth')
      }
      else
      {
        navigate('/AskQuestion')
      }
  }

  return (
      <div className='main-bar'>
          <div className='main-bar-header'>
              {
                location.pathname === '/' ? <h1>Top Questions</h1>
                : <h1>All Qestions</h1>
              }
              <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
          </div>
          <div>
              {
                 questionsList.data === null ? 
                 <h1>Loading...</h1> : 
                 <>
                    <p>{questionsList.data.length} questions</p>
                    <QuestionList questionsList={questionsList.data}/>
                 </>
              }
          </div>
      </div>
  )
}

export default HomeMainbar