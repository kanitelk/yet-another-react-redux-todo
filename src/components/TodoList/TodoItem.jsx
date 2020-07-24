import React from 'react'

const TodoItem = ({id, title, completed, toggle, toggler}) => {
  return <div onClick={toggler} className={`todo-item ${completed ? 'completed' : ''}`}>
    <p>{title}</p>
  </div>
}

export default TodoItem;