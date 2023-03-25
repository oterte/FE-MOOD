import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { postStreaming } from '../api/streamingApi'

export type UseAudioReturnType = [
  () => void,
  React.RefObject<HTMLAudioElement>,
  Dispatch<SetStateAction<number>>
]

function useAudio(): UseAudioReturnType {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timer, setTimer] = useState<number>(0)
  const [musicId, setMusicId] = useState(0)

  const handleTimeUpdate = () => {
    if (audioRef.current?.currentTime && audioRef.current.currentTime >= 3) {
      setTimer((prev) => prev + 1)
    }
  }
  if (timer === 30) {
    postStreaming(musicId)
  }
  return [handleTimeUpdate, audioRef, setMusicId]
}

export default useAudio
