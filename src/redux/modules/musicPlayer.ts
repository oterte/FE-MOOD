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
}

const musicSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    setMusicPlay: (state, action) => {
      state.musicTitle = action.payload.musicTitle
      state.composer = action.payload.composer
      state.musicId = action.payload.musicId
      state.musicUrl = action.payload.musicUrl
    },
  },
})

export default musicSlice.reducer
export const { setMusicPlay } = musicSlice.actions;
