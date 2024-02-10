import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const newBlog = async (content) => {
    
    const response = await axios.post(baseUrl, {
        content: content,
        id: getId(),
        votes: 0
      })
    return response.data
}
const updateVotes = async (blog) => {
    const response = await axios.put(`${baseUrl}/${blog.id}`,blog)
    return response.data
}
export default { getAll, newBlog, updateVotes}