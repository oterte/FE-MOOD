import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import styled from 'styled-components'
import useAudio from '../../hooks/useAudio'
import { useEffect, useState } from 'react'
import playBar from '../../assets/icons/music_play_brown.png'
import playStopBar from '../../assets/icons/music_stop_brown.png'
import { setTogglePlaying } from '../../redux/modules/isPlaying'

function Play() {
  const [handleTimeUpdate, audioRef, setMusicNumber] = useAudio()
  const [currentTime, setCurrentTime] = useState<number | undefined>(0)
  const [duration, setDuration] = useState<number | undefined>(0)
  const dispatch = useDispatch()

  const data = useSelector((state: RootState) => {
    return state
  })

  const playingState = data.isPlaying.state

  useEffect(() => {
    if (audioRef.current?.duration && audioRef.current.currentTime) {
      setCurrentTime(audioRef.current?.currentTime)
      setDuration(audioRef.current?.duration)
    }
  }, [
    data,
    audioRef.current?.duration,
    audioRef.current?.currentTime,
    audioRef.current?.onloadedmetadata,
    audioRef.current?.readyState,
  ])

  const calculate = (secs: number) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const seconds = Math.floor(secs % 60)
    const returndeSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${returnedMinutes} : ${returndeSeconds}`
  }

  useEffect(() => {
    if (data.musicPlayer.musicId) setMusicNumber(data.musicPlayer.musicId)
  }, [data])

  const onClickPlayToggleHandler = () => {
    dispatch(setTogglePlaying())
    if (playingState) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
  }

  return (
    <AudioWrap>
      <AudioContain>
        <PlayExplain>
          <PlayTitle>{data.musicPlayer.musicTitle}</PlayTitle>
          <p style={{ color: '#888888' }}>{data.musicPlayer.composer}</p>
        </PlayExplain>
        {playingState === false ? (
          <PlayImg src={playBar} onClick={onClickPlayToggleHandler} />
        ) : (
          <PlayImg src={playStopBar} onClick={onClickPlayToggleHandler} />
        )}
        {currentTime === 0 ||
        currentTime === undefined ||
        duration === undefined ||
        Number.isNaN(duration) ? (
          <PlayTime>
            <span style={{ color: '#888888' }}>00 : 00</span> / 00 : 00
          </PlayTime>
        ) : (
          <PlayTime>
            <span style={{ color: '#888888' }}>{calculate(currentTime)}</span> /{' '}
            {calculate(duration)}
          </PlayTime>
        )}
      </AudioContain>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        src={data.musicPlayer.musicUrl}
      />
    </AudioWrap>
  )
}

export default Play

const AudioWrap = styled.div`
  width: 1900px;
  height: 120px;
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  box-sizing: border-box
  position: sticky;
  bottom: 0px;
  margin-top: 30px;
  position: sticky;
  display:flex;
`
const AudioContain = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const PlayExplain = styled.div`
  width: 300px;
`
const PlayTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
`
const PlayImg = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin: auto;
  position: absolute;
  left: 600px;
`
const PlayTime = styled.p``
