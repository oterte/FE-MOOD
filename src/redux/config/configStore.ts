import { combineReducers, createStore } from 'redux'
import musicPlayer from '../modules/musicList'

const rootReducer = combineReducers({
  musicPlayer,
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
