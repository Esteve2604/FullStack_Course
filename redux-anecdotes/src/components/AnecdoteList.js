import { useSelector, useDispatch } from 'react-redux'
import { addBlogVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, blogs }) => {
        return blogs.filter(blog => blog.content.includes(filter))
    })
    const vote = (anecdote) => {
        dispatch(addBlogVote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }
    return <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        )}
    </>
}
export default AnecdoteList