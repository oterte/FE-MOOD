import isPlaying from '../modules/isPlaying'
import musicPlayer from '../modules/musicPlayer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    musicPlayer: musicPlayer,
    isPlaying: isPlaying,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
