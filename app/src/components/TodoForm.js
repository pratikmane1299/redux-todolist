import React from "react";

function TodoForm({ todo, onChange, onAddTodo }) {
  return (
    <div className="todo-form">
      <input 
        className="todo-input" 
        value={todo} 
        onChange={onChange} 
      />
      <button className="add-todo-btn" onClick={onAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
