
import { FETCH_POSTS } from '../actions'
import _ from 'lodash'


const initialState = [
  {
    text: '',
    completed: false,
    id: 0
  }
]


export default function todos(state = [], action) {
  switch (action.type) {
    // case 'ADD_TODO':
    // 	// alert("faefa")
    // 	console.log(action.payload)
    //   return [
    //     {
    //       id: action.payload.task.id,
    //       completed: false,
    //       text: action.payload.task.name
    //     },
    //     ...state
    //   ]

    // case 'DELETE_TODO':
    // console.log(action.payload.data.task.id)
    //   return state.filter(todo =>
    //     todo.id !== action.payload.data.task.id
    //   )

    default:
      return state
  }
}
