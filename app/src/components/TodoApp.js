import React from 'react'
import { connect } from 'react-redux'

const TodoApp = ({ todos }) => {
  console.log(todos);
  return (
    <div className="container">
      <div className="app">
        <p className="title">Todo App</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoApp);

