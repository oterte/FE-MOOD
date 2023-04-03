import { combineReducers, createStore } from 'redux'
import musicPlayer from '../modules/musicPlayer'
import {configureStore} from "@reduxjs/toolkit"

// const rootReducer = combineReducers({
//   musicPlayer,
// })

// const store = configure(rootReducer)

const store = configureStore({
    reducer: {
        musicPlayer: musicPlayer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
