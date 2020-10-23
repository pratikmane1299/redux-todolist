import React from 'react'

function TodoItem({ todo, onChecked }) {
  return (
    <div className="todo-item">
      <input type="checkbox" value={todo.completed} onChange={onChecked} />
      <span className={todo.completed ? 'completed' : null}>{todo.text}</span>
    </div>
  )
}

export default TodoItem
