export const Anecdote = ({anecdote}) => {
    return (
        <div>
            <p>Has {anecdote.votes} votes</p>
            <p>Link for extra info: {anecdote.info}</p>
        </div>
    )
}