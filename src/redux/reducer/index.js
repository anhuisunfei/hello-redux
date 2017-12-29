import {postReducer} from './posts'
import {commentReducer} from './comments'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
})

export default rootReducer
