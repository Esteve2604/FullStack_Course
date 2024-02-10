import Blog from './Blog'
import BlogForm from './BlogForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import  Table  from 'react-bootstrap/Table'
const Blogs = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const blogs = useSelector(state => state.blogs)
    return (<>
        <h2>Blogs</h2>
        <p></p>
        <BlogForm title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} url={url} setUrl={setUrl}
        />
        {
            blogs.map(blog => <Table style={{font:'Verdana'}} bordered hover responsive="sm">
                <tbody>
                    <Blog key={blog.id} blog={blog} />
                </tbody>
            </Table>
            )
        }
    </>
    )
}

export default Blogs