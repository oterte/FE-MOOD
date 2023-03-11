import { useState, ChangeEvent } from 'react'

const useInput = () => {
  const [value, setValue] = useState<string>("")

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, handler]
}

export default useInput
