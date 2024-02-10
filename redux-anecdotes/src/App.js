import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import { initializeBlogs} from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(initializeBlogs())
  },[dispatch])
  return (
    <div>
      <AnecdoteFilter />
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App