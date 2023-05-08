import React, { FC, useState } from 'react'
import './List1.css'
import QuestionItem from './components/QuestionItem'
import { produce } from 'immer'

const List1: FC = () => {
  const [questions, setQuestions] = useState([
    { id: 'q1', title: '问卷1', isPublished: true },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷2', isPublished: true },
    { id: 'q4', title: '问卷3', isPublished: false }
  ])

  const add = () => {
    const r = Math.random().toString().slice(-3)
    setQuestions(
      produce((draft) => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false
        })
      })
    )
  }

  const edit = (id: string) => {
    setQuestions(
      produce((draft) => {
        const q = draft.find((item) => item.id === id)
        if (q) q.isPublished = true
      })
    )
  }

  const del = (id: string) => {
    setQuestions(
      produce((draft) => {
        const index = questions.findIndex((item) => id === item.id)
        draft.splice(index, 1)
      })
    )
  }

  return (
    <div className="App">
      <ul>
        {questions.map((question) => {
          const { id, title, isPublished } = question
          return (
            <QuestionItem
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              edit={edit}
              del={del}
            ></QuestionItem>
          )
        })}
      </ul>

      <button
        onClick={() => {
          add()
        }}
      >
        增加
      </button>
    </div>
  )
}

export default List1
