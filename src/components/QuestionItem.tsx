import React, { FC } from 'react'
import './QuestionItem.css'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  edit: (id: string) => void
  del: (id: string) => void
}

const QuestionItem: FC<PropsType> = (props) => {
  const { id, title, isPublished, edit, del } = props

  return (
    <li className="li" key={id}>
      <span style={{ marginRight: '100px' }}>{id}</span>
      <span style={{ marginRight: '100px' }}>{title}</span>
      <span>{isPublished ? '已发布' : '未发布'}</span>

      <button
        onClick={() => {
          edit(id)
        }}
      >
        修改
      </button>
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除
      </button>
    </li>
  )
}

export default QuestionItem
