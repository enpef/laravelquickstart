import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_books'
import task from './reducer_task'
import loadPage from './load'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  task,
  load: loadPage
});

export default rootReducer