import FormInput from './FormInput'
import blogsServices from '../services/blogs'
import Togglable from './Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { setSuccessNotification } from '../reducers/successNotificationReducer'
import { setErrorNotification } from '../reducers/errorNotificationReducer'
import { createNewBlog } from '../reducers/blogsReducer'
import Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const BlogForm = ({ title, setTitle, author, setAuthor, url, setUrl }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleNewBlog = async (event) => {
        event.preventDefault()
        try {
            dispatch(createNewBlog({ title, author, url }, user))
            dispatch(setSuccessNotification(`New Blog ${title} by ${author} added correctly`))
            setTitle('')
            setAuthor('')
            setUrl('')
        } catch (exception) {
            dispatch(setErrorNotification(`Wrong Blog Format`))
            console.log('Wrong Blog Format')
        }
        return
    }
    return (
        <>
            <h2>Create new blog</h2>
            <Togglable buttonLabel='create new blog'>
                <Form onSubmit={handleNewBlog}>
                    <Form.Group>
                        <FormInput entry={title} setEntry={setTitle} entryName={"Title"} />
                        <FormInput entry={author} setEntry={setAuthor} entryName={"Author"} />
                        <FormInput entry={url} setEntry={setUrl} entryName={"URL"} />
                        <Button variant='primary' size='sm' id='create-button' type="submit">Create</Button>
                    </Form.Group>
                </Form>
            </Togglable>
        </>
    )
}
export default BlogForm