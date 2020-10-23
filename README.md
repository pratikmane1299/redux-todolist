# TodoList with Redux

* [x] Bootstrap react app.
* [x] Install Dependencies.
* [x] Create redux store and root reducer.
* [x] Create `TodoApp` container component and connect to redux store.
* [x] Add New todo.
  * [x] Create `TodoForm` component.
  * [x] Create action, action creator and modify state to add a todo.
  * [x] Add `ADD_TODO` action to `mapDispatchToProps` and pass as prop to `TodoForm` component.
  * [x] On form submit, dispatch add todo action.
* [x] Display todos.
  * [x] Iterate over todos and render todo text.
  * [x] Create `TodoItem` component and pass todo as prop.
* [ ] Toggle todo as complete.
  * [ ] Create toggle todo action, action creator and update a todo.
  * [ ] Add `TOGGLE_COMPLETE` action to`mapDispatchToProps` and pass as prop to `TodoItem` component.
  * [ ] Add checkbox in `TodoItem` component.
  * [ ] On checked/unchecked, dispatch update todo action.
* Delete a todo.
  * [ ] Create delete todo action, action creator and delete a todo.
  * [ ] Add `DELETE_TODO` action to `mapDispatchToProps` and pass as prop to `TodoItem` component.
  * [ ] Add Delete button in `TodoItem` component.
  * [ ] On delete, dispatch delete todo action.
