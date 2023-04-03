import { useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import styled from 'styled-components'
import useAudio from '../../hooks/useAudio'
import { useEffect } from 'react'

const AudioWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  position: sticky;
  bottom: 0px;
  margin-top: 30px;
`

function Play() {
  const data = useSelector((state: RootState) => {
    return state.musicPlayer
  })

  const [handleTimeUpdate, audioRef, setMusicNumber] = useAudio()

  useEffect(() => {
    if (data.musicId) setMusicNumber(data.musicId)
  }, [data])

  return (
    <AudioWrap>
      <div>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          controls
          src={data.musicUrl}
          autoPlay={true}
        />
      </div>
    </AudioWrap>
  )
}

export default Play
