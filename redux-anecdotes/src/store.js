import blogReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
      blogs: blogReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })
  export default store