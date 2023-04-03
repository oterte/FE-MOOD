import musicPlayer from '../modules/musicPlayer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    musicPlayer: musicPlayer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
