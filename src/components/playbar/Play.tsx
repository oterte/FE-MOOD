import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import styled from 'styled-components'
import useAudio from '../../hooks/useAudio'
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import playBar from '../../assets/icons/music_play_brown.png'
import playStopBar from '../../assets/icons/music_stop_brown.png'
import { setTogglePlaying } from '../../redux/modules/isPlaying'

interface Props {
  width: string
}

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

  // const onClickTimeChangeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (targetRef) {
  //     const targetCoordinate = Math.floor(
  //       (e.nativeEvent.offsetX / progressBar.current!.clientWidth) * 100
  //     )
  //     console.log( ((audioRef.current!.currentTime) / targetCoordinate) * 100)
  //     audioRef.current!.currentTime =  ((audioRef.current!.currentTime) / targetCoordinate) * 100
  //   }
  // }

  return (
    <>
      <AudioWrap>
        <ProgressBar
          ref={progressBar}
          defaultValue="0"
          // onClick={onClickTimeChangeHandler}
        >
          <Dealt width={dealt} ref={targetRef}></Dealt>
        </ProgressBar>
        <AudioContain>
          <PlayExplain>
            <PlayTitle>
              {data.musicPlayer.musicTitle.length > 20
                ? data.musicPlayer.musicTitle.substring(0, 20) + '...'
                : data.musicPlayer.musicTitle}
            </PlayTitle>
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
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          src={data.musicPlayer.musicUrl}
          autoPlay={true}
        />
      </AudioWrap>
    </>
  )
}

export default React.memo(Play)

const AudioWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  margin-top: 30px;
`
const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #d9d9d9;
`
const Dealt = styled.div<Props>`
  background-color: #4b372e;
  width: ${(props) => props.width + '%'};
  height: 5px;
  border-radius: 5px;
`

const AudioContain = styled.div`
  width: 1280px;
  height: 120px;
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
