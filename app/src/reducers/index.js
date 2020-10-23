import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          { id: state.todos.length + 1, text: action.payload, completed: false },
          ...state.todos
        ]
      }
    case TOGGLE_COMPLETE:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state;
  }
}