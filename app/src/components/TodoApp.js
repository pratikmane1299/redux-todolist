import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions';

import TodoForm from './TodoForm';

const TodoApp = ({ todos, addTodo }) => {
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

  return (
    <div className="container">
      <div className="app">
        <p className="title">Todo App</p>
        <TodoForm 
          todo={todo} 
          onChange={onChange} 
          onAddTodo={onAddTodo} 
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoApp);

