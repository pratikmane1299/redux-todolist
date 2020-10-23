import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleComplete } from '../actions';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoApp = ({ todos, addTodo, toggleComplete }) => {
  const [todo, setTodo] = useState(''); 

  const onChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  }

  const onAddTodo = (e) => {
    e.preventDefault();
    if (todo !== '') {
      addTodo(todo);
      setTodo('');
    }
  }

  const onToggle = (id) => {
    toggleComplete(id);
  }

  return (
    <div className="container">
      <div className="app">
        <p className="title">Todo App</p>
        <TodoForm 
          todo={todo} 
          onChange={onChange} 
          onAddTodo={onAddTodo} 
        />
        <div className="todo-list">
          {
            todos.map(todo => (
              <TodoItem 
                todo={todo} 
                key={todo.id} 
                onChecked={() => onToggle(todo.id)} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  { addTodo, toggleComplete }
)(TodoApp);

