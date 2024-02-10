import { useState } from 'react'

export const useField = (type, addReset) => {
  const [value, setValue] = useState('')
  addReset(type,setValue)
  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}