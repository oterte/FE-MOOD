import { useRef, useState } from 'react'

function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [timer, setTimer] = useState<number>(0)

  const handleTimeUpdate = () => {
    if (audioRef.current?.currentTime && audioRef.current.currentTime >= 3) {
      setTimer((prev) => prev + 1)
    }
  }
  if (timer === 10) {
    console.log('api 작동')
  }
  return [handleTimeUpdate, audioRef]
}

export default useAudio
