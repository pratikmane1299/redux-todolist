import React from 'react'

function TodoItem({ todo, onChecked, onDelete }) {
  return (
    <div className="todo-item">
      <input type="checkbox" value={todo.completed} onChange={onChecked} />
      <span className={todo.completed ? 'completed' : null}>{todo.text}</span>
      <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>delete</button>
    </div>
  )
}

export default TodoItem
