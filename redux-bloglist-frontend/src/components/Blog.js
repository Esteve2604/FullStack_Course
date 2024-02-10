import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateNewBlog, removesBlog } from '../reducers/blogsReducer'
import { setSuccessNotification } from '../reducers/successNotificationReducer'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
  }
  const handleRemove = (blogToDelete) => () => {
    dispatch(removesBlog(blogToDelete))
    dispatch(setSuccessNotification(`Blog ${blogToDelete.title} by ${blogToDelete.author} has been removed correctly`))

  }
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedBlogappUser'))

  return (<>
    <tr>
      <td className='blogshort'><Link to={`/blogs/${blog.id}`} >{blog.title} {blog.author} </Link> </td>
      {loggedUser.username === blog.user.username ? <td><Button variant='dark' size='sm' id='remove-button' onClick={handleRemove(blog)}>remove</Button> </td> : <></>}
    </tr>
  </>
  )
}

export default Blog