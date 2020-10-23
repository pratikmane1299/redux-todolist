import { ADD_TODO } from '../actions';

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
    default:
      return state;
  }
}