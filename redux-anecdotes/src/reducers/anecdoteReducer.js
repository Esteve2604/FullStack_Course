import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const blog=action.payload
      const updatedState = state.map(anecdote => anecdote.id === blog.id ? blog : anecdote)
      return updatedState.sort((a, b) => b.votes - a.votes)
    },
    addAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    },
    appendBlog(state, action){
      state.push(action.payload)
    },
    setBlogs(state, action){
      return action.payload.sort((a, b) => b.votes - a.votes)
    }
  }
})




export const { addVote, addAnecdote, appendBlog, setBlogs } = anecdoteSlice.actions
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs= await anecdotesService.getAll()
    dispatch(setBlogs(blogs))
  }
}
export const createBlogs = (content) => {
  return async dispatch => {
    const newBlog= await anecdotesService.newBlog(content)
    dispatch(appendBlog(newBlog))
  }
}
export const addBlogVote = (blog) => {
  return async dispatch => {
    const blogUpdated= { ...blog, votes: blog.votes+1 }
    const newBlog= await anecdotesService.updateVotes(blogUpdated)
    dispatch(addVote(newBlog))
  }
}
export default anecdoteSlice.reducer