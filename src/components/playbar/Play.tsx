import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import styled from 'styled-components'
import useAudio from '../../hooks/useAudio'
import { useEffect, useState } from 'react'
import playBar from '../../assets/icons/music_play_brown.png'
import playStopBar from '../../assets/icons/music_stop_brown.png'
import { setIsPlaying, setTogglePlaying } from '../../redux/modules/isPlaying'

function Play() {
  const [handleTimeUpdate, audioRef, setMusicNumber] = useAudio()
  const [playing, setplaying] = useState<boolean>(false)
  const dispatch = useDispatch()

  const data = useSelector((state: RootState) => {
    return state
  })
  
  const playingState = data.isPlaying.state

  useEffect(() => {
    if (data.musicPlayer.musicId) setMusicNumber(data.musicPlayer.musicId)
  }, [data])

  const onClickPlayToggleHandler = () => {
    setplaying(!playing)
    dispatch(setTogglePlaying())
    if (playing) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
  }

  return (
    <AudioWrap>
      <div>
        <p>{data.musicPlayer.musicTitle}</p>
        <p>{data.musicPlayer.composer}</p>
      </div>
      {playing === false || playingState === false ? (
        <PlayImg src={playBar} onClick={onClickPlayToggleHandler} />
      ) : (
        <PlayImg src={playStopBar} onClick={onClickPlayToggleHandler} />
      )}
      <span>00:00 / 00:00</span>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        controls
        src={data.musicPlayer.musicUrl}
        // autoPlay={true}
      />
    </AudioWrap>
  )
}

export default Play

const AudioWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  position: sticky;
  bottom: 0px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PlayImg = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`
