import { useState, ChangeEvent, useCallback } from 'react'

const useInput = () => {
  const [value, setValue] = useState<string>('')

  const handler = useCallback

  const clear = () => {
    setValue('')
  }
  return [value, handler, clear]
}

export default useInput
