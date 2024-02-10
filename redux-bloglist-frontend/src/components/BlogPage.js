import { useDispatch } from "react-redux"
import { updateNewBlog, updateBlogComments } from "../reducers/blogsReducer"
import { useState } from "react"
const BlogPage = ({ blog }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    if (!blog) return null
    const handleLikes = (blogToUpdate) => () => {
        dispatch(updateNewBlog({ ...blogToUpdate, likes: blogToUpdate.likes + 1 }))
    }
    const handleComment = () => () => {
        dispatch(updateBlogComments(comment, blog))
        setComment('')
    }
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>
                <a href="" onClick={() => false}>{blog.url}</a> <br></br>
                {blog.likes} <button id='like-button' onClick={handleLikes(blog)}>like</button> <br></br>
                added by {blog.user.name}
            </p>
            <h2>Comments</h2>
            <input
                id='comentario'
                type="text"
                value={comment}
                name="comentario"
                onChange={({ target }) => setComment(target.value)}
            /> <button onClick={handleComment()}>add comment</button>
            {blog.comments.map(comment => <li key={comment}>{comment}</li>)}
        </div>
    )
}
export default BlogPage