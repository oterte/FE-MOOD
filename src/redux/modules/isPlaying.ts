import { createSlice } from '@reduxjs/toolkit'

interface IsPlayingType {
  state: boolean
}
const isPlayingInitialState: IsPlayingType = {
  state: false,
}

const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState: isPlayingInitialState,
  reducers: {
    setIsPlaying: (state) => {
      console.log('작동')
      state.state = true
    },
    setTogglePlaying: (state) => {
      state.state = !state.state
    },
  },
})

export default isPlayingSlice.reducer

export const { setIsPlaying, setTogglePlaying } = isPlayingSlice.actions
