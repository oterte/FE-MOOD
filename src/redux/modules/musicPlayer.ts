import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  composer: '',
  fileName: '',
  musicContent: '',
  musicId: undefined,
  musicTitle: '',
  musicUrl: '',
  status: undefined,
  tag: null,
  userId: undefined,
  imageUrl: '',
}

const musicSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    setMusicPlay: (state, action) => {
      console.log(action)
      state.imageUrl = action.payload.imageUrl
      state.musicTitle = action.payload.musicTitle
      state.composer = action.payload.composer
      state.musicId = action.payload.musicId
      state.musicUrl = action.payload.musicUrl
    },
  },
})

export default musicSlice.reducer
export const { setMusicPlay } = musicSlice.actions
