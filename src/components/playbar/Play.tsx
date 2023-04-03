import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'

function Play() {
  const data = useSelector((state: RootState) => {
    return state.musicPlayer
  })

  return <div></div>
}

export default Play
