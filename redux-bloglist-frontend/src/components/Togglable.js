import { useState } from 'react'
import Button  from 'react-bootstrap/Button'
const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant='secondary' size='sm' onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button variant='secondary' size='sm' onClick={toggleVisibility}>cancel</Button>
      </div>
    </div>
  )
}

export default Togglable