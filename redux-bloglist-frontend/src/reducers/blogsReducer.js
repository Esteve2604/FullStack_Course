import { createSlice } from '@reduxjs/toolkit'
import blogsServices from '../services/blogs'
const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload
        },
        createNew(state, action) {
            state.push(action.payload)
        },
        updateBlog(state, action) {
            return state.map(blog => blog.id === action.payload.id ? action.payload : blog)
        },
        removeBlog(state, action) {
            return state.filter(blog => blog.id !== action.payload.id)
        }
    }
})
export const { setBlogs, createNew, updateBlog, removeBlog } = blogsSlice.actions
export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogsServices.getAll()
        dispatch(setBlogs(blogs))
    }

}
export const createNewBlog = (content, user) => {
    return async dispatch => {
        const newBlog = await blogsServices.create(content)
        newBlog.user = user
        dispatch(createNew(newBlog))
    }
}
export const updateNewBlog = (content) => {
    return async dispatch => {

        const updatedBlog = await blogsServices.update(content)
        updatedBlog.user = content.user
        dispatch(updateBlog(updatedBlog))
    }
}
export const updateBlogComments= (comment, blog) =>{
    return async dispatch => {
        const updatedBlog=await blogsServices.addComment(comment, blog)
        updatedBlog.user = blog.user
        dispatch(updateBlog(updatedBlog))
    }
}
export const removesBlog = (content) => {
    return async dispatch => {
        await blogsServices.remove(content)
        dispatch(removeBlog(content))
    }
}
export default blogsSlice.reducer