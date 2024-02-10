import { useState, useEffect } from 'react'
import Login from './components/Login'
import blogService from './services/blogs'
import Notification from './components/Notification'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogsReducer'
import { setUser } from './reducers/userReducer'
import Menu from './components/Menu'
import { initializeUsers } from './reducers/usersReducer'
const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])
  useEffect(() => {
    dispatch(initializeUsers())
  }, [blogs])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }, [])
  //title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} url={url} setUrl={setUrl}
  return (
    <div>
      <Notification.SuccessNotification />
      <Notification.ErrorNotification />
      {user === null ?
        <Login username={username} password={password} user={user}
          setUsername={setUsername} setPassword={setPassword} setUser={setUser} />
        :
        <Menu />}
    </div>
  )
}

export default App