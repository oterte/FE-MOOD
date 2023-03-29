import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { postStreaming } from '../api/streamingApi'

export type UseAudioReturnType = [
  () => void,
  React.RefObject<HTMLAudioElement>,
  Dispatch<SetStateAction<number>>
]

function useAudio(): any {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timer, setTimer] = useState<number>(0)
  const [musicNumber, setMusicNumber] = useState(0)

  const handleTimeUpdate = (musicId: number) => {
    setMusicNumber(musicId)
    if (audioRef.current?.currentTime && audioRef.current.currentTime >= 0) {
      setTimer((prev) => prev + 1)
    }
  }
  if (timer === 3) {
    postStreaming(musicNumber)
    console.log('api 작동')
  }

  return [handleTimeUpdate, audioRef, setMusicNumber]
}

export default useAudio
