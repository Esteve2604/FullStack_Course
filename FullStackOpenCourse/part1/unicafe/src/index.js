import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.all == 0 && props.text.localeCompare("good") == 0) {
    return (
      <>
        <h1>No feedback given</h1>
      </>
    )
  } else if (props.all == 0) return
  return (
    <>
      <table>
        <tbody>
          <tr><td>{props.text}</td>
            <td>{props.value}</td></tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + bad + neutral
  let average = (good - bad) / all
  let positive = (good / all)
  const setToValue = (value, set) => () => {
    return (set(value))
  }
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={setToValue(good + 1, setGood)}>good</button>
      <button onClick={setToValue(neutral + 1, setNeutral)}>neutral</button>
      <button onClick={setToValue(bad + 1, setBad)}>bad</button>
      <h1>statistics</h1>
      <Statistics text="good" value={good} all={all} />
      <Statistics text="neutral" value={neutral} all={all} />
      <Statistics text="bad" value={bad} all={all} />
      <Statistics text="all" value={all} all={all} />
      <Statistics text="average" value={`${average}`} all={all} />
      <Statistics text="positive" value={`${positive}%`} all={all} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)