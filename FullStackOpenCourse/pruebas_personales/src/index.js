import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)
  console.log(process.env.REACT_APP_API_KEY);
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  const Button = (props) => (
    <button onClick={props.handleClick} >{props.text}</button>
  )
  return (
    <div>
      {value}
      <Button handleClick={setToValue(1000)} text="thousand" />
      <button onClick={setToValue(0)} >reset</button>
      <Button handleClick={setToValue(value + 1)} text="increment" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
