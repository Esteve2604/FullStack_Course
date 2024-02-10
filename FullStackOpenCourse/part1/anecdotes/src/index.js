import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const point = new Array(6).fill(0)
const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(0)
  const [mostvoted, setMostVoted] = useState(0)
  const getRandAnec = (min, max) => () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ran = Math.floor(Math.random() * (max - min + 1) + min)
    setSelected(ran)
    setVote(point[ran])
    if(point[mostvoted]<point[ran]){
      setMostVoted(ran)
    }
  }
  const vote = (selected) => () => {
    point[selected]++
    setVote(point[selected])
    if(point[mostvoted]<point[selected]){
      setMostVoted(selected)
    }
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]} <br></br>
      Has {votes} votes</p>
      <button onClick={vote(selected)}>vote</button>
      <button onClick={getRandAnec(0,5)}>Next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostvoted]} <br></br>
      Has {point[mostvoted]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
