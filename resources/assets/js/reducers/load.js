import { FETCH_POSTS } from '../actions'
import _ from 'lodash'



export default function(state = {}, action) {
  switch (action.type) {

  	case FETCH_POSTS:
  		// console.log(_.mapKeys(action.payload.data.tasks, 'id'))
      return _.mapKeys(action.payload.data.tasks, 'id')

    default:
      return state
  }
}
