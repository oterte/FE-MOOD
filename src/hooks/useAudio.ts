import { Dispatch, SetStateAction, useRef, useState, useEffect } from 'react'
import { postStreaming } from '../api/streamingApi'

export type UseAudioReturnType = [
  () => void,
  React.RefObject<HTMLAudioElement>,
  Dispatch<SetStateAction<number>>
]

function useAudio(): UseAudioReturnType {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timer, setTimer] = useState<number>(0)
  const [musicNumber, setMusicNumber] = useState(0)

  const handleTimeUpdate = () => {
    if (audioRef.current?.currentTime && audioRef.current.currentTime >= 0) {
      setTimer((prev) => prev + 1)
    }
  }
  if (timer === 20) {
    postStreaming(musicNumber)
  }

  return [handleTimeUpdate, audioRef, setMusicNumber]
}

export default useAudio
