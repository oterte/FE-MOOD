import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import useAudio from '../../hooks/useAudio'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import playBar from '../../assets/icons/music_play_brown.png'
import playStopBar from '../../assets/icons/music_stop_brown.png'
import { setTogglePlaying } from '../../redux/modules/isPlaying'
import {
  AudioWrap,
  ProgressBar,
  Dealt,
  AudioContain,
  PlayExplain,
  PlayTitle,
  PlayImg,
  PlayImgContain,
} from './PlaySt'

function Play() {
  const [handleTimeUpdate, audioRef, setMusicNumber] = useAudio()
  const progressBar = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = useState<number | undefined>(0)
  const [duration, setDuration] = useState<number | undefined>(0)
  const [dealt, setDealt] = useState('0')
  const dispatch = useDispatch()

  const data = useSelector((state: RootState) => {
    return state
  })

  const playingState = data.isPlaying.state

  useEffect(() => {
    if (currentTime && duration) {
      setDealt(String((currentTime / duration) * 100))
    }
  }, [currentTime])

  const setTime = useCallback(() => {
    if (audioRef.current?.duration && audioRef.current.currentTime) {
      setCurrentTime(audioRef.current?.currentTime)
      setDuration(audioRef.current?.duration)
    }
  }, [])

  useEffect(() => {
    setTime()
  }, [
    data,
    audioRef.current?.duration,
    audioRef.current?.currentTime,
    audioRef.current?.onloadedmetadata,
    audioRef.current?.readyState,
  ])

  const calculate = useCallback((secs: number) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const seconds = Math.floor(secs % 60)
    const returndeSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${returnedMinutes} : ${returndeSeconds}`
  }, [])

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
    <>
      <AudioWrap>
        <ProgressBar ref={progressBar} defaultValue="0">
          <Dealt width={dealt} ref={targetRef}></Dealt>
        </ProgressBar>
        <AudioContain>
          <PlayExplain>
            <PlayTitle>
              {data.musicPlayer.musicTitle.length > 20
                ? data.musicPlayer.musicTitle.substring(0, 40) + '...'
                : data.musicPlayer.musicTitle}
            </PlayTitle>
            <p style={{ color: '#888888' }}>{data.musicPlayer.composer}</p>
          </PlayExplain>
          {playingState === false ? (
            <PlayImgContain>
              <PlayImg src={playBar} onClick={onClickPlayToggleHandler} />
            </PlayImgContain>
          ) : (
            <PlayImgContain>
              <PlayImg src={playStopBar} onClick={onClickPlayToggleHandler} />
            </PlayImgContain>
          )}
          {currentTime === 0 ||
          currentTime === undefined ||
          duration === undefined ||
          Number.isNaN(duration) ? (
            <p>
              <span style={{ color: '#888888' }}>00 : 00</span> / 00 : 00
            </p>
          ) : (
            <p>
              <span style={{ color: '#888888' }}>{calculate(currentTime)}</span>
              / {calculate(duration)}
            </p>
          )}
        </AudioContain>
      </AudioWrap>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        src={data.musicPlayer.musicUrl}
        autoPlay={true}
      />
    </>
  )
}

export default React.memo(Play)
